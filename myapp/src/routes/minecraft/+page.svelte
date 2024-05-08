<div style="color: white;" class="imgdimmer link_color">
    <h1 class="text-center">Minecraft</h1>
    <br>
    <h4 class="text-center">You want to Play Minecraft?</h4>
    <h5 class="text-center">Then Join our Discord and endjoy playing Minecraft with us</h5>
    <br>
    <div class="text-center">
        <button id="joindiscordminecraft" on:click={()=>location.href='https://discord.gg/cxRbADAk'}
            class="rounded text-center minecraftbutton">Join
            Server</button>
        <script>
            document.getElementById('joindiscordminecraft').onclick = function () {
                var url = 'https://discord.gg/cxRbADAk';
                var win = window.open(url, '_blank');
                win.focus;
            };
        </script>
    </div>
    <br>

    <h5 class="text-center">We are currently playing on the 1.20.4. You can Build whatever whereever you
        want to Build.</h5>
    <h5 class="text-center text-danger">We have some <a class="" href="Mc_Rules.html">Rules</a> that you have to
        follow.</h5>
    <h5 class="text-center">Here you can see the map of our minecraft world.</h5>
    <br>
    <div class="text-center">
        <button class="rounded text-center minecraftbutton">Minecraft Overworld</button>
        <button class="rounded text-center minecraftbutton">Minecraft Nether</button>
        <button class="rounded text-center minecraftbutton">Minecraft End</button>
    </div>
</div>