// 1-masala sonning juft yoki toq son ekanligini aniqlovchi dastur yozing
//let son = +prompt("son kiriting");
//if (son % 2 === 0) {console.log("juft son");}
// else {console.log("toq son");}
//===============================================
// 2-masala foydalanuvchidan 3-xonalik son oling ular ichida eng kattasi qaysi honada ekanligi aniqlovchi dastur yozing va consolega chiqaring
//let son = +prompt("3-xonalik son kirirting");
//let yuzlar = Math.trunc(son / 100);
//let onliklar = Math.trunc((son / 10) % 10);
//let birliklar = son % 10;
//if (yuzlar > onliklar && yuzlar > birliklar) {console.log(" eng katta son yuzliklar honasida");}
//else if (onliklar > yuzlar && onliklar > birliklar) {console.log(" eng katta son onliklar honasida ");}
//else console.log(" eng katta son birliklar honasida");
//===============================================
//3-maslaa sonning ishorasini aniqlovchi dastur yozing bunda console.log musbat manfiy yoki nol degan stringlar qaytarsin
//let son = +prompt("son kiriting");
//if (son > 0) {console.log("musbat son");}
//else if (son < 0) {console.log("manfiy son");}
// else {console.log("nol");}
//===============================================

//4-masala   3-xonalik son kiritilsa uni sozlarda ifodalovchi dastur yozing
//let son = +prompt("3 xonalik son kiriting");
//let yuzlar = Math.trunc(son / 100);
//let onliklar = Math.trunc((son / 10) % 10);
//let birliklar = son % 10;
//let yuzlarSoz = "";
//let onliklarSoz = "";
//let birliklarSoz = "";
//switch (yuzlar) {
//case 1:
// yuzlarSoz = "bir yuz";
// break;
//case 2:
//  yuzlarSoz = "ikki yuz";
//  break;
//case 3:
// yuzlarSoz = "uch yuz";
//  break;
//case 4:
//  yuzlarSoz = "tort yuz";
// break;
//case 5:
//  yuzlarSoz = "besh yuz";
//  break;
// case 6:
//   yuzlarSoz = "olti yuz";
//   break;  case 7:
//   yuzlarSoz = "yetti yuz";
//   break;
// case 8:
//   yuzlarSoz = "sakkiz yuz";
//   break;
//case 9:
//   case 0:
//      yuzlarSoz=""
// yuzlarSoz = "toqqiz yuz";
// break;
//default:
//   break;}
//switch (onliklar) {
//  case 1:
//   onliklarSoz = "o'n";
//   break;
// case 2:
//  onliklarSoz = "yigirma";
//   break;
// case 3:
//   onliklarSoz = "ottiz";
//   break;
// case 4:
//   onliklarSoz = "qirq";
//   break;
// case 5:
//   onliklarSoz = "ellik";
//   break;
//  case 6:
//   onliklarSoz = "oltmish";
//   break;
// case 7:
//   onliklarSoz = "yetmish";
//   break;
//case 8:
//  onliklarSoz = "sakson";
//   break;
// case 9:
//   onliklarSoz = "toqson";
// case 0:
//       onliklarSoz=""
//   break;
//  default:
//   break;}
//switch (birliklar) {
//  case 1:
//    birliklarSoz = "bir";
//    break;
//  case 2:
//    birliklarSoz = "ikki";
//    break;
//  case 3:
//    birliklarSoz = "uch";
//   break;
// case 4:
//   birliklarSoz = "tort";
//  break;
// case 5:
//  birliklarSoz = "besh";
//   break;
//  case 6:
//  birliklarSoz = "olti";
//   break;
// case 7:
//    birliklarSoz = "yetti";
//    break;
//  case 8:
//  birliklarSoz = "sakkiz";
//   break;
// case 9:
//   birliklarSoz = "toqqiz";
//   break;
//   case 0:
//      birliklarSoz=""

//default:
//  break;}
//console.log(`${yuzlarSoz}   ${onliklarSoz}  ${birliklarSoz}`);

//===============================================

// 5-masala kabisa yilini aniqlovchi dastur yozing
// Foydalanuvchi biror yilni (masalan: 2024, 2025, 2100) kiritadi. Dastur ushbu yil kabisa yoki oddiy yil ekanligini aniqlashi va natijani ekranga chiqarishi kerak.
// Mantiqiy yechim (Algoritm):Yilni $N$ deb olsak, u quyidagi mantiqiy zanjirdan o'tishi kerak:Agar $N$ soni 400 ga qoldiqsiz bo'linsa $\rightarrow$ bu Kabisa.
// Agar 400 ga bo'linmasa, lekin 100 ga qoldiqsiz bo'linsa $\rightarrow$ bu Oddiy yil (chunki 100 ga bo'linib, 400 ga bo'linmaydigan yillar, masalan 1900 yoki 2100, kabisa emas)
// .Agar yuqoridagilarning hech biri bo'lmasa, lekin 4 ga qoldiqsiz bo'linsa $\rightarrow$ bu Kabisa.Qolgan barcha holatlarda $\rightarrow$ Oddiy yil.
//let yil = +prompt("yil kiriting");
//if (yil % 400 === 0) { console.log("bu kabisa yili");}
// else if (yil % 100 === 0) {console.log("bu oddiy yil");}
// else if (yil % 4 === 0) { console.log("bu kabisa yili");}
// else {console.log("bu oddiy yil");}
//===============================================
// 6-masala  foydalanuvchi 2ta son kiritadi ulardan eng kichigini qaytaruvchi dastur yozing bunda Math dan foydalanmang  bunda || && operatorlaridan foydalaning
let son1 = +prompt("1-sonni kiriting");
let son2 = +prompt("2-sonni kiriting");
son1 < son2 ? console.log(son1) : console.log(son2);

//===============================================

// 7-savol let const var kalit sozlarini bir birdan farqini yozib qoldiring

//===============================================
