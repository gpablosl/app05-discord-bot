import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyMDE4NDQwNDIxNDU3.X3tI6w.CM2sIlmXBxqNa-D60bzkkPNuCWc';     

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', msg =>{
	if(msg.content.includes("mencho")){
    msg.reply(" el mench0 a mi me pela la verga");
    }
    else if (msg.content === 'ping'){
    msg.reply('pong');
    }
});

client.login(TOKEN_API);