// let names = [
//     ["https://wallpaperaccess.com/full/1605638.jpg", "Coffee", 30000],
//     ["https://wallpaperaccess.com/full/82635.jpg", "Cream", 25000]
// ];
let names  = JSON.parse(localStorage.getItem("names"));
if (names === null) {
    names = [
        ["https://wallpaperaccess.com/full/1605638.jpg","Coffee",30000],
        ["https://wallpaperaccess.com/full/82635.jpg","Scream",25000],
        ["https://wallpaperaccess.com/full/2405819.jpg","Trà sữa",20000]
    ];
}
let divShow = document.getElementById("show");
show();
function show() {
    let str = `
                <tr>
                <th>STT</th>
                <th>Hình ảnh</th>
                <th>Tên</th>
                <th >Giá(vnđ)</th>
               </tr>
                <tr><td colspan="6"><hr></td></tr>`;
    for (let i = 0; i < names.length; i++) {
        str += `<tr>
                        <td >${i+1}</td>
                        <td style="padding: 10px"><img src="${names[i][0]}" width="100" height="50"></td>
                        <td style="padding: 8px">${names[i][1]}</td>
                        <td >${names[i][2]}</td>
                        <td><button onclick="edit(${i})" class="edit">Sửa</button></td>
                        <td><button onclick="delete01(${i})" class="delete">Xoá</button></td>
                    </tr>
                    <tr><td colspan="6"><hr></td></tr>`;
    }
    divShow.innerHTML = str;
}

function clear(){
    let img = document.getElementById("inputImg").value='';
    let name = document.getElementById("inputName").value='';
    let price = document.getElementById("inputPrice").value='';
}

function edit(index) {
    let img = document.getElementById("inputImg").value;
    let name = document.getElementById("inputName").value;
    let price = document.getElementById("inputPrice").value;
    names.splice(index, 1, [img, name, price]);
    show();
    clear();
    localStorage.setItem("names",JSON.stringify(names));
}

function add() {
    let img = document.getElementById("inputImg").value;
    let name = document.getElementById("inputName").value;
    let price = document.getElementById("inputPrice").value;
    names.push([img, name,price]);
    show();
    clear();
    localStorage.setItem("names",JSON.stringify(names));

}

function delete01(index) {
    names.splice(index, 1);
    show();
    localStorage.setItem("names",JSON.stringify(names));
}