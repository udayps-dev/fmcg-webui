const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs').promises; 

const spawn = require('child_process').spawn;


const getDbfData = (path) => {
    return new Promise((resolve, reject) => {
        const process = spawn('python', ['dbfJS.py', path]);
        let data = '';
        process.stdout.on('data', (chunk) => {
            data += chunk;
        });
        process.on('close', (code) => {
            if (code === 0) {
                resolve(JSON.parse(data));
            } else {
                reject(`Process exited with code ${code}`);
            }
        });
    });
}

let cashfile = path.join(__dirname,"../", "d01-2324","data",'CASH.DBF');

getDbfData(cashfile).then((data) => {
    console.log(data);
    fs.writeFile('output.json', JSON.stringify(data, null, 2));
})

// let x = {
//     "DATE": "2023-04-02",
//     "VR": "SB-N00021",
//     "M_GROUP1": "GG",
//     "C_CODE": "GG027",
//     "CR": 40.68,
//     "DR": 0,
//     "REMARK": "BY GOODS BILL NO.N-   21",
//     "CD": null,
//     "QCR": 0,
//     "QDR": null,
//     "R_NO": null,
//     "SERIES": "N",
//     "BILL": "   21",
//     "DT_BILL": "2023-04-02",
//     "BOOK": "CB",
//     "E_TYPE": "G",
//     "ITEM": "",
//     "PUR_CODE": "MA011",
//     "REC_AMT": null,
//     "ET_PAID": "",
//     "R_CODE": "",
//     "CR_NOTE": null,
//     "B_PLACE": "",
//     "PTRAN": "",
//     "PBILL": null,
//     "PSERIES": "",
//     "JB_ENO": null,
//     "BR_CODE": "SM001",
//     "BILL1": "N-   21",
//     "REC_VR": "",
//     "SMPSER": "",
//     "BFLAG": "",
//     "AC_NAME": "GOODS A/C OTHERS 18%",
//     "AC_PLACE": "",
//     "AC_GST": "",
//     "CD_ENTRY": "",
//     "CD_VRNO": "",
//     "IST_PUR": "",
//     "UNIT_NO": null,
//     "BANK_DATE": null,
//     "OK": "",
//     "PRINT": "",
//     "BILL2": "N-   21",
//     "TR_TYPE": "",
//     "CHQ_ISSUE": "",
//     "CASH": "N",
//     "FINANCE": "",
//     "DN_PAY": null,
//     "AC_MOBILE": "",
//     "TAX": null,
//     "TRAN_TYPE": "",
//     "CODE_ORG": "",
//     "SM_ORG": "",
//     "BANK": "",
//     "ST_CODE": "23",
//     "ST_NAME": "MADHYA PRADESH",
//     "CESS_TAX": 0,
//     "GST_TAX": 18,
//     "C_ADD1": "",
//     "C_PLACE": "",
//     "PUR_NAME": "JAI GANESH TRADERS MANGLIPETH",
//     "PUR_ADD1": "MANGLIPETH",
//     "PUR_PLACE": "SEONI",
//     "PUR_GST": "23AMRPH1188H1ZX",
//     "PUR_ST": "23",
//     "PUR_STNAME": "MADHYA PRADESH",
//     "SGST": 0,
//     "CGST": 0,
//     "IGST": 0,
//     "CESS_TOTAL": null,
//     "DUMMY": "GG027-02.04.2023SB     40.68",
//     "USER_ID": null,
//     "USER_TIME": null,
//     "USER_ID2": null,
//     "USER_TIME2": null,
//     "SPID": "",
//     "INVVALUE": 24428,
//     "REGD": "",
//     "GST_TYPE": "SGST",
//     "GD00": null,
//     "GD03": null,
//     "GD05": null,
//     "GD12": null,
//     "GD18": null,
//     "GD28": null,
//     "TAX00": null,
//     "TAX03": null,
//     "TAX05": null,
//     "TAX12": null,
//     "TAX18": null,
//     "TAX28": null,
//     "CESS": null,
//     "PST9": "23",
//     "MST9": "23",
//     "B_IGST": "N",
//     "TCODE": "PR",
//     "OLDVR": "",
//     "_NullFlags": "b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'"
//   }

// let data = fs.readFile('output.json', 'utf8').then((data) => {
//     data = JSON.parse(data);
//     let partycode = "BU194";
//     // filter data based on party code
//     let partyData = data.filter((item) => {
//         return item.C_CODE === partycode;
//     });

//     // SUM CR - SUM DR -> print
//     let cr = 0, dr = 0, result = 0;
//     partyData.forEach((item) => {
//         cr += item.CR;
//         dr += item.DR;
//     });


//     result = cr - dr;
//     if (result < 0) {
//         result = Math.abs(result);
//         result += " DR"
//     } else {
//         result = result + " CR";
//     }

 
//     console.log(cr, dr);
//     console.log(result);


// })