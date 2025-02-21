--- 
title: "Valheim Server 2025"
date: "2025-02-20"
image: "/posts/valheim-server-2025/images/20250220204312_1.jpg"
readingTime: true 
description: "Revisiting Valheim with the Peeps."
--- 

## Intro 

Well here we are again. 
New Valheim content? New playthrough with friends! 

The last time I got a server going for Valheim was for the sake of trying out the Mistlands content. 
Now with the Bog Witch update as well as the finishing up of the Ashlands, it seemed like a good time to revisit. 

The server's "vibe" was pretty similar to the last time around (see the [2023 post](../valheim-server/index.md)). 

This meant: 

- The server is always available if someone wants to hop on (ignoring some crashes).
- There is no limit on how a person interacts with "known" content.
  - For the most part, this counts as anything available with the most recently defeated boss
  - Occasionally we stretched the definition to include bosses we all knew about already and weren't interested in. 
- All of us (or at least a majority) meet up to make meaningful progression via bosses. 

And we did it! 
We dragged ourselves over the finish line. 
I think the general sentiment after going through it all again this time around is that the last time we do it is going to be when 1.0 releases, and that will probably be the end of our viking adventures. 

So now for details! 

## Server Configuration 

### Hosting 
The infrastructure used to host the server this time around was much more simple. 
And cheaper.
The last time I hosted the game, I lacked a spare computer that I could just have running the game all the time. 
This lead me to just grabbing an EC2 server, which worked quite well, but I was always aware of the constant drain on my wallet. 
Not that it was something unaffordable, but ~$50 a month or whatever it ended up being kind of stung. 

This time around though, I _did_ have a spare computer laying around.
The game computer in my living room doesn't see very much use, and is always powered on. 
Perfect. 

So zero AWS and thus much less stuff to worry about. 
Instead it was just a simple docker container running locally, with Tailscale punching a hole through my network to allow everyone else to connect. 
Tailscale is still $5/month to allow everyone to connect, but that's literally a tenth of the previous cost. 


### Docker

Docker is still just Docker, I have no deep insights. 
I used the `ghcr.io/lloesche/valheim-server` container, mounted some volumes for game data, and passed a few environment variables.  
Boom, server. 

```yaml
# compose.yaml
services:
  valheim:
    image: ghcr.io/lloesche/valheim-server
    ports:
      - "2456-2458:2456-2458/udp" 
    restart: unless-stopped
    stop_grace_period: 2m
    volumes:
      - '{Local_Volume}/valheim-local-server/game_data/config:/config'
      - '{Local_Volume}/valheim-local-server/game_data/core:/opt/valheim'
      - '{Local_Volume}/valheim-local-server/server_mods/plugins:/config/bepinex/plugins'

    environment:
      SERVER_NAME: "Valheim Server"
      WORLD_NAME: "Viking Nonsense"
      SERVER_PASS: "xxxxx"
      SERVER_PUBLIC: false
      ADMINLIST_IDS: "xxxxxxxxxxxxx"
      VALHEIM_PLUS: false
      BEPINEX: true
```

### Mods 

The world of Valheim modding has changed a little bit since the last time around - 
ValheimPlus kind of died and was resurrected by someone else (and was broken when I tried to use it), and individual mods became more preferred instead of bundling stuff. 
This was facilitated by [Thunderstore](https://thunderstore.io/c/valheim/) gaining popularity, along with their mod manager. 

Our Chosen Mods: 

- [PlantEverything](https://thunderstore.io/c/valheim/p/Advize/PlantEverything/)
  - Allows planting resources beyond what Vanilla has. 
  - In any biome.
  - With adjustable grow times.
- [PlantEasily](https://thunderstore.io/c/valheim/p/Advize/PlantEasily/)
  - Adjustable grid-based planting 
- [AutoFuel](https://thunderstore.io/c/valheim/p/aedenthorn_mods/AutoFuel/)
  - Automatically refuel fireplaces, stoves, torches, etc. 
  - Note - I swear the torches were just eating resources due to a bug. Never could prove it though. 
- [AutoRepair](https://thunderstore.io/c/valheim/p/Tekla/AutoRepair/)
  - When you interact with a workstation, repair anything in your inventory that can be. 
- [AzuAutoStore](https://thunderstore.io/c/valheim/p/Azumatt/AzuAutoStore/)
  - Dump matching items from your inventory into nearby chests. 
  - This was a late addition, but it's amazing. 
- [AzuCraftyBoxes](https://thunderstore.io/c/valheim/p/Azumatt/AzuCraftyBoxes/)
  - Build and craft using items from nearby storage containers. 
  - This also worked with food stations and furnaces (very helpful). 
- [BetterWards](https://thunderstore.io/c/valheim/p/Azumatt/BetterWards/)
  - This mod offers a lot of customization around wards, but the only thing we wanted was area of protection. If buildings are in range, you can set wards to auto-repair them if damage is dealt. 
- [TeleportEverything](https://thunderstore.io/c/valheim/p/OdinPlus/TeleportEverything/)
  - Allows... teleporting... everything. Metal is annoying in this game. 
- [EquipmentAndQuickslots](https://thunderstore.io/c/valheim/p/RandyKnapp/EquipmentAndQuickSlot/)
  - Gives new inventory slots for equipment and three extra slots for whatever. 
  - I didn't personally get a lot of mileage out of the quickslots, but the equipment slots were nice enough. 
- [Server Devcommands](https://thunderstore.io/c/valheim/p/JereKuusela/Server_devcommands/)
  - Allows admins to run dev commands / cheats on the server like you can by default in single player  
  - Why is this something that needs to be modded to work??? 

## My Thoughts on the New Content 

So there were two big new things this time around - the Bog Witch, and the Ashlands. 


### Bog Witch 

The Bog Witch was fine. 
It's a new NPC that lives in the swamp, that sells potion and cooking ingredients. 

We did not use the potions at all, but the cooking stuff was nice. 
You have to buy her spices to make feasts, which mainly ended up being a nice way to have some good looking communal food resources when you die and respawn. 

I'd prefer not having to hoof it to the merchant to stock up on spices, but they stack and you go through them slowly, so it isn't the worst. 
Plus it's entirely optional - you can just make normal food if you don't want to interface with it. 

### Ashlands 

Dude... The Ashlands kinda suck. 

A fiery land at the bottom of the world, full of horrible monsters.

Visually very cool!  
Thematically stunning!   
Absolutely insufferable to interface with!

The two things that really stick out in my mind are the spawn rates and the boss. 

You never stop fighting enemies in the Ashlands, to the point of tedium. 
Walk forward 20 feet, kill 4 enemies, walk another 20 feet, kill another 4 enemies, look behind you, oop there's 8 more enemies that have spawned to fill the gap. 
It's simply too much. 

The boss (Fader) I'd describe as having a single unfair move that ruins the entire experience. 
AoE fire that tracks _all_ players, in an absolutely massive area. 
Basically if you die once the entire fight is screwed. 
Teleporter destroyed, monsters spawning around you, no hope. 

Otherwise very neat boss... 

## Conclusion

Valheim is a fun game to play with friends, assuming you are willing to soften the tedium with mods and some light use of admin commands. 

It's a bit cozy, I like the building, and I like being able to work towards goals with my friends. It's weirdly tricky to get a game going that we all can progress through and stick with long enough to "finish" it, and this is one of them. Which means I like it. :shrug:

But we really do only have maybe one more full playthrough in us, once the game fully releases. I think that's okay though, it's not the type of game you play constantly forever. 
Going through the content and finding new things is fun, but there's enough pain points to make it something that definitely needs an ending. 


![](/images/20250220203959_1.jpg)
![](/images/20250220204007_1.jpg)

![](/images/20250220204022_1.jpg)
![](/images/20250220204051_1.jpg)

![](/images/20250220204102_1.jpg)
![](/images/20250220204114_1.jpg)

![](/images/20250220204236_1.jpg)
![](/images/20250220204312_1.jpg)

![](/images/20250220204404_1.jpg)
![](/images/20250220205704_1.jpg)

![](/images/20250220203949_1.jpg)
![](/images/20250220203316_1.jpg)
