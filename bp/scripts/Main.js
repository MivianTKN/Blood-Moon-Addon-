import { World, Commands, TickEventSignal } from "mojang-minecraft"
//Start callback
TickEventSignal.subscribe(tick => {
  onTick()
})

//Functionu to check game time
function onTick(){
  let gameTime = Commands.run("time query daytime", World.getDimension("overworld"))
  let newRes = gameTime.result
  //converts result to int
  let gameTime = parseInt(newRes.data)
  //converts result to string and says in chat for debugging
  Commands.run("say " + toString(gameTime), World.getDimension("overworld"))
  
}
// Starts a Blood MOon - Summons Zombies
function startMoon(){
  let players = world.getPlayers()
}