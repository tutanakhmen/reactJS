/**
 * function Hello() merupakaan sebuah komponen.
 * terdapat  perbedaan antara elemen dengan komponen.  
 * komponen terdiri dari beberapa elemen
 * komponen seperti function
 */
function Hello(props) {
    /**
     * disini adalah javscript.
     * dapat mengetik dalam betnuk javascipt
     * 
     */

    // destructing props agar bisa reusable
    const {nama, major} = props

    return(
        // dsini adlaah JSX
        <div className="hello">
            <h2> Halo Nama Saya {nama} </h2>
            <p>Jurusan Saya adalah {major}</p>
        </div>
    )
}

export default Hello