import React from 'react';
import Game from '../bin/Game';
import _ from 'lodash';

const Board = () => {
    return (
    <div>
        <div className="board">
            <div className="title">    
              <h3>Monopoly</h3>
            </div>
            <div className="corner-free-parking">
                <img src="https://preview.ibb.co/mZn79H/parking.jpg" border="2" width="125" height="125"/>     
            </div>

            <div className="row vertical-row right-row">
                <div className="Pacific Avenue">
                    <img className="top" src="https://preview.ibb.co/fdRd1x/pacific.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="North Carolina Avenue">
                    <img className="top" src="https://preview.ibb.co/eb1E8c/north_Carolina.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Community Chest">
                    <img className="top" src="https://preview.ibb.co/eF07Tc/community3.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Pennsylvania Avenue">
                    <img className="top" src="https://preview.ibb.co/kmUTZH/pen.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Short Line">
                    <img className="top" src="https://preview.ibb.co/cSuTZH/short.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Chance">
                    <img className="top"src="https://preview.ibb.co/iEaP8c/chance2.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Park Place">
                    <img className="top" src="https://preview.ibb.co/fYF2uH/park.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Luxury Tax">
                    <img className="top" src="https://preview.ibb.co/jeWQEH/tax.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Boardwalk">
                    <img className="top" src="https://preview.ibb.co/kxvwMx/board_Walk.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
            </div>

            <div className="got-to-jail">
                <img src="https://preview.ibb.co/n83Qgx/jail2.jpg" border="2" width="125" height="125"/>     
            </div>

            <div className="row horizontal-row top-row">
                <div className="Kentucky Avenue">
                    <img className="top" src="https://image.ibb.co/mKDoJc/kentucky.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Chance">
                    <img className="top" src="https://image.ibb.co/n2vupH/chance.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Indiana Avenue">
                    <img className="top" src="https://image.ibb.co/e4kUPH/indiana.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Ilinois Avenue">
                    <img className="top" src="https://image.ibb.co/kmyNdc/ilinois.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="BO Railroad">
                    <img className="top" src="https://image.ibb.co/dOGsdc/BO.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Atlantic Avenue">
                    <img className="top" src="https://image.ibb.co/cvJYjH/atlantic.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Ventnor Avenue">
                    <img className="top" src="https://image.ibb.co/mevDjH/ventnor.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Water Works">
                    <img className="top" src="https://image.ibb.co/fSRvgx/water.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Marvin Avenue">
                    <img className="top" src="https://image.ibb.co/buRErx/marvin.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
            </div>    

            <div className="row vertical-row left-row">
                <div className="New York Avenue">
                    <img className="left" src="https://preview.ibb.co/i0Bvwx/newYork.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Tennessee">
                    <img className="left" src="https://preview.ibb.co/d0Liic/tennessee.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Community Chest">
                    <img className="left" src="https://preview.ibb.co/e7b63c/community2.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="St James Place">
                    <img className="left" src="https://preview.ibb.co/fpLS9H/StJames.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Pennsylvania Railroad">
                    <img className="left"src="https://preview.ibb.co/gBHeOc/penssylvania.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                 <div className="Virginia Avenue">
                    <img className="left" src="https://preview.ibb.co/czLzOc/virginia.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="States Avenue">
                    <img className="left" src="https://preview.ibb.co/bPHAwx/states.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="Electric Company">
                    <img className="left" src="https://preview.ibb.co/eVON9H/electric.jpg" border="2" width="125" height="80" padding="0"/>
                </div>
                <div className="St Charles">
                    <img className="left" src="https://preview.ibb.co/dcZOGx/St_Charles.jpg" border="2" width="125" height="80" padding="0"/>
                </div>

            </div>


            <div className="corner-jail">
                <img src={Game.cells[0].img} border="2" width="125" height="125"/>     
            </div>


            <div className="row horizontal-row bottom-row">

                <div className="Connecticut">
                    <img className="2" src="https://image.ibb.co/cwWH9H/connecticut.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Vermont">
                    <img className="2" src="https://image.ibb.co/eSbvwx/vermont.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Chance">
                    <img className="2" src="https://image.ibb.co/n2vupH/chance.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Oriental">
                    <img className="2" src="https://image.ibb.co/iSYKOc/oriental.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Income">
                    <img className="2" src="https://image.ibb.co/fR9b3c/income.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Railroad">
                    <img className="2" src="https://image.ibb.co/ePNwmx/reading.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Baltic">
                    <img className="2" src="https://image.ibb.co/dmsPpH/baltic.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Community">
                    <img className="2" src="https://image.ibb.co/cDD5Dc/community.jpg" border="2" width="80" height="125" padding="0"/>
                </div>
                <div className="Mediterranian">
                    <img className="1" src="https://image.ibb.co/nFtxtc/mediterranean.jpg" border="2" width="80" height="125" padding="0"/>
                </div>    
               
            </div>
            <div className="corner-go">
                    <img src={Game.cells[0].img} border="2" width="125" height="125"/>     
            </div>
        </div>


        <style>
            {`
                .board {
                    margin: 30px auto;
                    width: 994px;
                    height: 994px;
                    border: 5px solid 
                    background-color: #cbe8df;
                }

                .title {
                    grid-column: 1 / 9;
                    grid-row: 4;
                    font-size: 30px;
                    font-weight: 100;
                    letter-spacing: 12px;
                    color: red;
                    transform: rotate(-45deg);
                    text-align: center;
                }

                .corner-go {
                    grid-column: 11;
                    grid-row: 11 / 12;
                    position: relative;
                }
                .corner-jail {
                    grid-column: 1;
                    grid-row: 11 / 12;
                    display: grid;
                }

                .corner-free-parking {
                    grid-column: 1;
                    grid-row: 1 / 2;
                
                }

                .row {
                    display: grid;
                    grid-gap: 2px;
                }
                
                .horizontal-row {
                    grid-template-columns: repeat(9, 80px);
                    grid-template-rows: 125px;
                }
                
                .vertical-row {
                    grid-template-columns: 125px;
                    grid-template-rows: repeat(9, 80px);
                
                }
                
                .container {
                    top: 50%;
                    left: 50%;
                }
                
                .left-row {
                    grid-column: 1;
                    grid-row: 2 / 11;
                }
                
                .right-row {
                    grid-column: 11;
                    grid-row: 2 / 11;
                }

                .go-to-jail {
                    grid-column: 11;
                    grid-row: 1 / 1;
                }
                

            `}
        </style>

    </div>
    )
}

export default Board