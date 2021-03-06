import React, { Component } from 'react';
import T20PLAYERS from './Details/T20Players';
class  Player extends Component{
    render(){
        const{name,pos,id}=this.props.player;
    return(
        <span>
            <li>Mr. {pos} Player {}</li>
        </span>
    )
    }
    
}
class  Player1 extends Component{
    render(){
        const{name,pos,id}=this.props.player1;
    return(
        <span>
            <li>{pos} : {name}{id}</li>
        </span>
    )
    }
    
}
class OddPlayers extends Component{
    render(){
        return(
            <div>
                <div>
                <h2>OddPlayers</h2>
                    <div>
                        {
                      T20PLAYERS.map(PLAYER1 =>{

                           if(PLAYER1.id %2!=0)
                           {
                                   return(
                                       <Player1 key={PLAYER1.id} player1={PLAYER1} />
                    );
                                   }
                       }
                       )
                    }
                    </div> 
                    </div>
                    <hr/>
                    <div>
                <h2>EvenPlayers</h2>
                    <div>
                        {
                       T20PLAYERS.map(PLAYER1 =>{

                           if(PLAYER1.id %2==0)
                           {
                                   return(
                                       <Player1 key={PLAYER1.id} player1={PLAYER1} />
                    );
                                   }
                       }
                       )
                    }
                    </div>
                    </div>
                    <hr/>
                     <div>
                  <h2>List of Indian Players Merged</h2>
                    <div>{
                      T20PLAYERS.map(PLAYER =>{
                                return(
                        <Player key={PLAYER.id} player={PLAYER} />
                    );
                       }
                       )
                    }
                    </div>
                    </div>
                    </div>

        

        );
    }
}
export default OddPlayers;