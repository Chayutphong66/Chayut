document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab'); // แท็บ
    const tabContents = document.querySelectorAll('.tab-content'); // เนื้อหาแต่ละแท็บ

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // เอา active ออกจากทุกแท็บและทุกเนื้อหา
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // เพิ่ม active ให้แท็บที่เลือกและเนื้อหาที่เกี่ยวข้อง
            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
});
