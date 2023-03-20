/*Cau1: Ham tra ve gia tri cao thu 3: */
// function sortArray(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i];
//                 arr[i] = arr[j];
//                 arr[j] =  temp;
//             }
//         }
//     }
//     return arr[arr.length-3];
// }
// let arr = [2,3,76,2,6,2,7,2,6,4,7,9,2,8,4,4,3]
// document.write(sortArray(arr))

/*Cau 2: Ham xoa ky tu trong mang*/

// function removeFromArray(arr,index){
//     let array =[];
//     if(index<0||index>=arr.length){
//         return arr;
//     }else{
//         for(let i=0;i<index;i++){
//             array[i] = arr[i]
//         }
//         for(let j= index;j<arr.length-1;j++){
//             array[j] = arr[j+1]
//         }
//         return array
//     }
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// let a =removeFromArray(arr,8)
// document.write(a)

/*Cau3: Kiem tra chuoi */

// function checkExistenceInString(str1, str2) {
//     for (let i = 0; i < str2.length; i++) {
//         for (let j = 0; j < str1.length; j++) {
//             if (str2[i + j] !== str1[j]) {
//                 break
//             }
//             if (j === str1.length - 1 && str2[i + j] === str1[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }
//
// let b = 'phungkhacdung'
// let c = '41251234phungkhacdung42542344'
// let a = checkExistenceInString(b, c);
// document.write(a);

/*Cau4: Ve hinh chu nhat:  */
/*Bo comment canvas trong html */
// function Rectangle(height,width,x,y,color)
// {
//     this.height = height;
//     this.width = width;
//     this.x = x;
//     this.y = y;
//     this.color = color
//
//     this.render = function(id) {
//         this.canvas = document.getElementById(id);
//         this.ctx = this.canvas.getContext('2d');
//         this.ctx.beginPath()
//         this.ctx.rect(this.x,this.y,this.width,this.height);
//         this.ctx.fillStyle = this.color
//         this.ctx.fill();
//         this.ctx.closePath();
//
//     }
// }
// let rec = new Rectangle(100,200,10,10,"#000000");
// rec.render("DemoCanvas");
// document.write("<br>")
// document.write(rec.x+"<br>")
// document.write(rec.y+"<br>")
// document.write(rec.height+"<br>")
// document.write(rec.width+"<br>")