<!DOCTYPE HTML>
<script> LANGUAGE ="JavaScript">

<form name="form">
<input size ="10" type="text" name="angka1" />
   <input type="checkbox" name="cek1" >
   <br/><br/>
 
   <input size="10" type="text" name="angka2"  />
   <input type="checkbox" name="cek1" value="true">
  <br/><br/>
  
  <input size="10" type="number" name="angka3"  />
  <input type="checkbox" name="cek1" value="true">
  
   </form >
    <br>

	<br>
            
            <input type="button" value=" + " onclick="tambah()" />
            <input type="button" value=" - " onclick="kurang()" />
            <input type="button" value=" x " onclick="kali()" />
            <input type="button" value=" / " onclick="bagi()" />
            <br/>
			
			<br/><br/>
			
			<Hasil : <input name="total" value=""> 
	

function cek (){
if(form.angka1.value==""&&form.angka2.value==""&&form.angka3.value==""||){
alert("data kosong")
exit;
}
}


function tambah(){
a=eval(form.angka1.value);
b=eval(form.angka2.value);
c=eval(form.angka3.value);

d=a+b+c


form.total.value=d;
}
}

function kali(){
a=eval(form.angka1.value);
b=eval(form.angka2.value);
c=eval(form.angka3.value);
if(isset($_POST['cek1'&&'cek2']){
d=a*b
}
else if (isset($_POST['cek1'&&'cek3']){
d=a*c
}
else if (isset($_POST['cek2'&&'cek3']){
d=b*c
}
else{
d=a*b*c
}
form.total.value=d;
}
}


function bagi(){
a=eval(form.angka1.value);
b=eval(form.angka2.value);
c=eval(form.angka3.value);
if(//ceklis12){
d=a/b
}
else if (//ceklis13){
d=a/c
}
else if (//ceklis23){
d=b/c
}
else{
d=a/b/c
}
form.total.value=d;
}
}

function kurang(){
a=eval(form.angka1.value);
b=eval(form.angka2.value);
c=eval(form.angka3.value);
if(//ceklis12){
d=a-b
}
else if (//ceklis13){
d=a-c
}
else if (//ceklis23){
d=b-c
}
else{
d=a-b-c
}
form.total.value=d;
}
}
</script>