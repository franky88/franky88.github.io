function generatePDF() {
    const adonOrderForm = document.getElementById("generate-pdf");
    const orderDetails = document.getElementById('order-details').value;
    const tradingName = document.getElementById('trading-name').value;
    var opt = {
        margin:       0.20,
        filename:     orderDetails+' '+tradingName+'.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'legal', orientation: 'portrait' }
    }
    html2pdf().set(opt).from(adonOrderForm).save();
}