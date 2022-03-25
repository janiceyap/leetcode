costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]];
let minCost = 0;

let twoCitySchedCost = function(costs) {

    let n = costs.length;
    // console.log("n", n);
    
    costs.forEach( e => {
        e.push(e[0]-e[1]);
    });
    
    // console.log("after minus", costs);

    costs.sort((a,b)=>{
        return a[2]-b[2];
    });

    // console.log("after sort", costs);

    for(let i=0; i<n/2; i++){
        minCost = minCost + costs[i][0] + costs[n-i-1][1];
    }

    console.log("minCost", minCost);
   
};

twoCitySchedCost(costs);
