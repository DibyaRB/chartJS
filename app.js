var ctx = document.getElementById('myChart').getContext("2d");
var chart = new Chart(ctx,{
    //Type of the Chart
    type: "line",
    // Datasets and labels
    data:{
        labels:[
            'January',
            'February',
            'March',
            'April',
            'May'
    ],
    datasets:[
        {
            label:"Carbon",
            backgroundColor:"rgb(222,133,120)",
            borderColor: "rgb(222,133,120)",
            data:[
                10,20,30,40,50
            ]

        },
        {
            label:"Water",
            backgroundColor:"rgb(150,133,120)",
            borderColor: "rgb(150,133,120)",
            data:[
                30,10,30,40,50
            ]

        }
    ]
    },
    options:{
        // animation:{
        //     duration:0
        // },
        // hover:{
        //     animationDuration:0
        // },
        // responsiveAnimationDuration:0
        
    }
});