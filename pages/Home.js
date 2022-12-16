import React from "react";

function Home(){
    return( 
        <div>
            <h1>Home !!</h1>
            <p>Welcome to my website which is about my erc721-ux project you can check it on the following link : </p>
            <p>https://github.com/louis2704/erc721-ux</p>
            <h2>Contracts deployed on the Seploia testnet</h2>
            <table>
                <tr>
                    <td>Fake BAYC </td>
                    <td>0x1dA89342716B14602664626CD3482b47D5C2005E</td>
                </tr>
                <tr>
                    <td>Fake Nefturians</td>
                    <td>0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED</td>
                </tr>
                <tr>
                    <td>Fake Meebits</td>
                    <td>0xD1d148Be044AEB4948B48A03BeA2874871a26003</td>
                </tr>
                <tr>
                    <td>Fake Meebits Claimer</td>
                    <td>0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55</td>
                </tr>
            </table>
        </div>
    )
}
export default Home;