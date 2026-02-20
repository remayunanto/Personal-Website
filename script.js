// Change AUM here
const aum = 32870267; // IDR value

function formatIDR(number) {
    return "IDR " + number.toLocaleString("id-ID");
}

document.getElementById("aumValue").innerText = formatIDR(aum);
