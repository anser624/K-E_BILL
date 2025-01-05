

function btnclick() {
  let unitid = document.getElementById("unit").value;
  let perunit = document.getElementById("perunit").value;
  let infobox = document.getElementById("infobox");

  infobox.classList.add("hide");
  let total = Number(unitid) * Number(perunit);
  function bill() {
    let nameid = document.getElementById("name").value;
    if (nameid == "") {
      alert("Please Enter Your Name");
      location.reload();
      return;
    }

    // createElement
    let box = document.getElementById("box");
    let boxdata = document.createElement("div");
    let latecharge = document.getElementById("penalty").value;
    boxdata.setAttribute("class", "info-box-1");
    let reloadbtn = document.createElement("button");
    reloadbtn.setAttribute('class','bill');
    reloadbtn.setAttribute('onclick','reloadbtn()');
    reloadbtn.innerHTML = 'ReGenerate Bill';
    let latetotal = total + Number(latecharge);
    // month
    let month = new Date();
    let monthname = month.getMonth();
    let montharray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let monthget = montharray[monthname];

    boxdata.innerHTML = `
        
        <p><b>Customer Name : </b><i> ${nameid}</i>.</p>
        <p><b>Month of : </b><i>${monthget}</i>.</p>
        <p><b>Number Of Units : </b><i>${unitid}</i>.</p>
        <p><b>Net Amount Payable (within Due Date): </b> <br> <i>${total.toFixed(
          2
        )}-Pkr</i>.</p>
        <p><b>Per unit price : </b><i>${perunit}<b>,</b>Pkr</i>.</p>
        <p><b>Late payment penalty : </b><i>${latecharge}<b>,</b>Pkr</i>.</p>
        <p><b>Gross Amount Payable (after Due Date):</b>  <br> <i>${latetotal}<b>,</b>Pkr</i>.</p>`;
    boxdata.appendChild(reloadbtn);
        box.appendChild(boxdata);
        
        reloadbtn();

}
  bill();
  
}
function reloadbtn() {
    location.reload();
}
// btnclick();
