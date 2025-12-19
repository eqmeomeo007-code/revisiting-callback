/* 
- เรากำลังสร้างเกมอยู่ ตัวละครในเกมของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. โจมตีผู้เล่นอื่น
    2. วิ่งหนีผู้เล่นอื่น
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

//ต้องใช้ function เพื่อ ดึงตัวแปร damage มาใช้ 
//if เพราะมี 2 สถานะการ น่าจะผิด ลองเปลี่ยนเป็นแบบนี้ "attack" แล้วก็ยังผิด 
//อาจจะต้องทำตัวแปร 2 แบบ คือ function 2 แบบ ไม่น่าจะใช้ 
// หรือว่า เราใส่ตัวแปรผิด น่าจะอันนี้ แต่ลองแล้วคิดไม่ออก 
//-----------------------------------------------------
// ดูจาก chatGpt คือผิดในรูปแบบ callback ต้องสร้าง playerAction ที่มีค่าด้านใน เปล่า แล้วไปสร้าง ส่วนของ attack และ runAway อีกที 

let damage = 30;
// Start Coding Here
let playerAction = function(action){
    return action()
}

let attack = function(){
    return `💥 โจมตีสำเร็จ! สร้างความเสียหาย ${damage} แต้ม`
}

let runAway = function(){
    return "😨 หนีสำเร็จ! รอดตายหวุดหวิด!"
}

//-------------------------------- แบบนี้ผิด
//let attack = "attack";
//let runAway = "runAway";

//let playerAction = function(choice){
//    if (choice === "attack") {
//        return `💥 โจมตีสำเร็จ! สร้างความเสียหาย ${damage} แต้ม`
//    } else if (choice === "runAway") {
//        return "😨 หนีสำเร็จ! รอดตายหวุดหวิด!"
//    }
//};

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้

console.log(playerAction(attack));  // 💥 โจมตีสำเร็จ! สร้างความเสียหาย 30 แต้ม
console.log(playerAction(runAway)); // 😨 หนีสำเร็จ! รอดตายหวุดหวิด!


