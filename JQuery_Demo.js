/* Test Functions */

function ShowCrash()
{
    $(document).ready(function() {
        $("#Crash_img").show(); {
            $("#Spyro_img").hide(), $("#Mega_man_img").hide(), $("#Zelda_img").hide();
            $("#Crash_Discription").show();
            $("#Spyro_Discription").hide();
            $("#Mega_Man_Discription").hide();
            $("#Zelda_Discription").hide();
        }
    });
}

function ShowSpyro()
{
    $(document).ready(function(){
        $("#Spyro_img").show(); {
            $("#Crash_img").hide(), $("#Mega_man_img").hide(), $("#Zelda_img").hide();
            $("#Crash_Discription").hide();
            $("#Spyro_Discription").show();
            $("#Mega_Man_Discription").hide();
            $("#Zelda_Discription").hide();
        }
    });
}

function ShowMegaMan()
{
    $(document).ready(function() {
       $("#Mega_man_img").show(); {
            $("#Crash_img").hide(), $("#Spyro_img").hide(), $("#Zelda_img").hide();
            $("#Crash_Discription").hide();
            $("#Spyro_Discription").hide();
            $("#Mega_Man_Discription").show();
            $("#Zelda_Discription").hide();
        }
    });
}

function ShowZelda()
{
    $(document).ready(function(){
        $("#Zelda_img").show(); {
            $("#Crash_img").hide(), $("#Spyro_img").hide(), $("#Mega_man_img").hide();
            $("#Crash_Discription").hide();
            $("#Spyro_Discription").hide();
            $("#Mega_Man_Discription").hide();
            $("#Zelda_Discription").show();
        }
    });
}