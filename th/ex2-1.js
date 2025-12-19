/* 
- เรากำลังพัฒนาระบบแจ้งเตือน (Notification System) อยู่ ระบบแจ้งเตือนของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. แจ้งเตือนกรณีสร้างโพสสำเร็จ
    2. แจ้งเตือนกรณีมีคนมากดไลค์
    3. แจ้งเตือนกรณีมีคนมาคอมเมนต์
    4. แจ้งเตือนกรณีมีคนแชร์โพส
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// ฝึกคิด 
// เป็นการแจ้งเตือนของแต่ละแบบ 4 แบบ
// ตามที่เข้าใจคือสร้าง  sendNotification เป็น function ค่าเปล่าเพื่อมารับตัวแปล ก่อน แล้วค่อย let ผลลัพอีก 4 ตัว 

// Start Coding Here
let sendNotification = function(post){
    return post()
}

let postCreated = function(){
    return "📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!" 
}

let postLiked = function(){
    return "👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!" 
}

let postCommented = function(){
    return "💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!" 
}

let postShared = function(){
    return "🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!" 
}

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(sendNotification(postCreated));   // 📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!
console.log(sendNotification(postLiked));     // 👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!
console.log(sendNotification(postCommented)); // 💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!
console.log(sendNotification(postShared));    // 🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!