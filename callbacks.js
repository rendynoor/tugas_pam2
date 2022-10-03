function halo(nama) {
    alert('halo,${nama}');
}

function outputpesan(callback){
    const nama = prompt ('nama anda adalah : ');
    callback(nama);
}
outputpesan(halo);

function outputpesan(callback){
    const nama = prompt ('namamu adalah : ' );
    callback(nama);
}
outputpesan(nama => alert('halo,${nama}'))