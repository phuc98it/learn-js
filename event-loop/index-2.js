const button = document.querySelector("button");

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log("microTask 1"));
    console.log("Sync code js stack 1");
})

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log("microTask 2"));
    console.log("Sync code js stack 2");
})

button.click();

/**
 * Load:
 * Sync code js stack 1
 * Sync code js stack 2
 * microTask 1
 * microTask 2
 * 
 * ===============================
 * khi 'Click' event -> result :
 * Sync code js stack 1
 * microTask 1
 * Sync code js stack 2
 * microTask 2
 * 
 * => Khi load thì cả 2 function đc 'load' cùng lúc.
 * -> còn khi 'click' event -> systen sẽ gọi lần lượt.
 *  + Tại vì click() là hàm của js chứ ko phải hàm async ko node cung cấp.
 *          -> JS đơn luồng và blocking.
 */
