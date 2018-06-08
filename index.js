




$(document).ready(() => {


    $('#submit').click(()=>{
        
   // location.reload(true);


 getAllData(); 

    })// end get data 

  


}); // end of document.ready()

let getAllData = () => {

    var inputImdb=document.getElementById("inputImdb").value;
    var inputYear=document.getElementById("inputImdb").value;
    var inputTitle=document.getElementById("inputImdb").value;

    console.log("making request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=951da92a', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data);
            console.log(data.Ratings[0].Value);
            
            if(data.imdbID==inputImdb||data.Title==inputTitle||data.Year==inputYear){

                    let tempRow = ` 
<div class="insideOmdbData">
<div class="row">
        
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><h4 style="color: #1382CA"> <span id="title"></span>(<span id="year"></span>)</h4></div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="ratingBox">
             <small><span id="rating"></span></small>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-3 col-xs-3" > <small><b>Runtime : </b><span id="runtime"></span></small></div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6"> <small><b>Genre : </b><span id="genre"></span></small></div>
        <div class="col-lg-4 col-md-4 col-sm-3 col-xs-3"> <small><b>Languages : </b><span id="language"></span></small></div>

</div>


    <br><br>

    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

        <div class="row">
        
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://image.freepik.com/free-vector/grunge-background-of-clapperboard-and-frame_23-2147592507.jpg" id="poster" width="200" height="200" class="img-fluid">
        </div>

        <div class="col-lg-9 col-md-9 col-sm-10 col-xs-12" id="DWAP">
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><small><b>Director : </b><span id="director"></span></small></div>
            <br>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><small><b>Writer : </b><span id="writer"></span></small></div>
            <br>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><small><b>Actor : </b><span id="actor"></span></small></div>
            <br>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><small><b>Plot : </b><br><span id="plot"></span></small></div>

            </div>
        </div>
    </div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top:1vh;">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p > Ratings</p>
            <p><small><b>Internet Movie Database :</b> <span id="imdbRating"></span></small></p>
            <p><small><b>Rotten Tomatoes :</b> <span id="rtRating"></span></small></p>
            <p><small><b>Metacritic :</b> <span id="metaRating"></span></small></p>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p > Additional info</p>
            <p><small><b>IMDB ID :</b> <span id="imdbID"></span></small></p>
            <p><small><b>Votes :</b> <span id="imdbVotes"></span></small></p>
            <p><small><b>Box Office Collection :</b> <span id="BoxOffice"></span></small></p>
            <p><small><b>Production :</b> <span id="Production"></span></small></p>
            <p><small><b>Box Office Collection :</b> <a href=""><span id="Website"></span></a></small></p>
        </div>

    </div>
</div>
</div> `

         $("#omdbData").append(tempRow);// placing data in division with id - 'omdbData'
        $("#title").text(data.Title);
         $("#year").text(data.Year);
          $("#rating").text(data.Rated);
           $("#runtime").text(data.Runtime);
            $("#genre").text(data.Genre);
             $("#language").text(data.Language);
              $("#director").text(data.Director);
               $("#writer").text(data.Writer);
                $("#actor").text(data.Actors);
                 $("#plot").text(data.Plot);
                  $("#imdbRating").text(data.Ratings[0].Value);
                  $("#rtRating").text(data.Ratings[1].Value);
                  $("#metaRating").text(data.Ratings[2].Value);
                  $("#imdbID").text(data.imdbID);
                  $("#imdbVotes").text(data.imdbVotes);
                  $("#BoxOffice").text(data.BoxOffice);
                  $("#Production").text(data.Production);
                  $("#Website").text(data.Website);
                 $("#poster").attr({"src":data.Poster,width:200,height:200});
             


           }

           else{
            let errorMsg = `<div class="alert alert-info alert-dismissible" role="alert">
                        There is some problem with the input given.
                        </div>`
                    $("#omdbData").append(errorMsg);
           }      
         },
        
        error: (data) => { // in case of error response

            console.log(request);
                    console.log(errorType);
                   let errorMsg = `<div class="alert alert-info alert-dismissible" role="alert">
                        There is some problem with api.
                        </div>`
                    $("#omdbData").append(errorMsg);
        },

        // beforeSend: () => { // while request is processing.

        //     // you can use loader here.
        //     alert("request is being made. please wait")

        // },
        // complete: () => {

        //     // what you want to do while request is completed
        //     alert("data fetched success")

        // },

        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData

