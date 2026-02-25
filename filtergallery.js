function showall()
{
    setactive("btn-all");
    document.getElementById("img1").style.display="block";
    document.getElementById("img2").style.display="block";
    document.getElementById("img3").style.display="block";
    document.getElementById("img4").style.display="block";
    document.getElementById("img5").style.display="block";
    document.getElementById("img6").style.display="block";
    document.getElementById("img7").style.display="block";
}

function nature()
{
    setactive("btn-nature");
    document.getElementById("img1").style.display="block";
    document.getElementById("img2").style.display="block";
    document.getElementById("img3").style.display="block";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";
}

function tech()
{
    setactive("btn-tech");
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="block";
    document.getElementById("img5").style.display="block";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";
}

function fruits()
{
    setactive("btn-fruits");
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="block";
    document.getElementById("img7").style.display="block";
}

function setactive(activebtn)
{
    document.getElementById("btn-all").classList.remove("active");
    document.getElementById("btn-nature").classList.remove("active");
    document.getElementById("btn-tech").classList.remove("active");
    document.getElementById("btn-fruits").classList.remove("active");

    document.getElementById(activebtn).classList.add("active");
}