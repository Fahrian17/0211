<html>
<head>
<script type="text/javascript">
function Prompt(){
    var nama=prompt("Siapa nama anda???","Masukan nama");
    if(nama!=null && nama!=""){
        document.write("Selamat Datang "+ nama );
    }
}
</script>
</head>
<body>
<input type="button" onClick="Prompt()" value="Lihat Prompt" />
</body>
</html>