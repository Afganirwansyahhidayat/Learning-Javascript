  const kerucut = {
            luas_alas: prompt("Isi Luas Alas kerucut: "),
            tinggi: prompt("Isi Tinggi Kerucut: "),
            rumus: () => { return (1/3) * 3.14 * (kerucut.luas_alas* kerucut.luas_alas ) * kerucut.tinggi}
        };

        console.log(kerucut.rumus());

        // var senjata = {
        //     nama: "Avtomat Kalashnikov 1947",
        //     pembuat: "Avtomat Kalashnikov",
        //     kaliber: "7.62x39mm",
        //     jenis: "Rifle",
        //     jangkauan: "400m",
        //     berat: "4.5kg",

        // };

        // console.log(senjata);

    //     var Arrays = [{
    //         nama: "Afgan Irwansyah Hidayat",
    //         umur: 16,
    //         alamat: "Jl. Kenangan",
    //     },
    //     {
    //         nama: "Budiono Siregar",
    //         umur: 12,
    //         alamat: "Jl. Medan",
    //     } 
    // ];

    //     console.log(Arrays[0].umur)
