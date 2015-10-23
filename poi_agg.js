/**
 * Created by am999_000 on 10/23/2015.
 */
// 5 Aggregations in 5 Minutes: The Nickel Tour of the Aggregation Framework

// 0. Sample Document

/*
db.logs.insert({	timestamp:new Date()	,d_id:	1	,v:	175	,location:{type:'Point',coordinates:[	121.558342	,	22.036933	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	3	,v:	350	,location:{type:'Point',coordinates:[	120.305689	,	22.757506	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	3	,v:	374	,location:{type:'Point',coordinates:[	121.529669	,	25.182628	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	6	,v:	76	,location:{type:'Point',coordinates:[	119.563678	,	23.565011	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	7	,v:	735	,location:{type:'Point',coordinates:[	120.205067	,	22.993642	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	1	,v:	761	,location:{type:'Point',coordinates:[	121.154694	,	22.752303	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	3	,v:	897	,location:{type:'Point',coordinates:[	121.514861	,	25.037583	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	8	,v:	816	,location:{type:'Point',coordinates:[	120.684083	,	24.145708	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	1	,v:	229	,location:{type:'Point',coordinates:[	120.541519	,	24.066	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	4	,v:	773	,location:{type:'Point',coordinates:[	120.432906	,	23.495911	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	7	,v:	552	,location:{type:'Point',coordinates:[	120.31725	,	23.305633	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	7	,v:	183	,location:{type:'Point',coordinates:[	121.035417	,	25.013575	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	7	,v:	660	,location:{type:'Point',coordinates:[	121.014228	,	24.827819	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	7	,v:	927	,location:{type:'Point',coordinates:[	120.880572	,	23.470608	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	9	,v:	14	,location:{type:'Point',coordinates:[	121.449239	,	25.1645	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	3	,v:	149	,location:{type:'Point',coordinates:[	121.740328	,	25.132956	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	4	,v:	469	,location:{type:'Point',coordinates:[	120.315739	,	22.565967	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	8	,v:	377	,location:{type:'Point',coordinates:[	119.923144	,	26.169192	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	9	,v:	948	,location:{type:'Point',coordinates:[	121.319964	,	24.994789	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	1	,v:	727	,location:{type:'Point',coordinates:[	120.8202	,	24.565269	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	6	,v:	671	,location:{type:'Point',coordinates:[	120.746322	,	22.003847	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	6	,v:	979	,location:{type:'Point',coordinates:[	120.488033	,	22.673081	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	4	,v:	648	,location:{type:'Point',coordinates:[	120.685306	,	23.913	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	6	,v:	456	,location:{type:'Point',coordinates:[	120.801394	,	23.508561	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	8	,v:	27	,location:{type:'Point',coordinates:[	118.290519	,	24.412022	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	4	,v:	798	,location:{type:'Point',coordinates:[	121.61315	,	23.975086	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	1	,v:	239	,location:{type:'Point',coordinates:[	121.458667	,	25.012972	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	4	,v:	822	,location:{type:'Point',coordinates:[	121.756542	,	24.763961	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	1	,v:	868	,location:{type:'Point',coordinates:[	120.568794	,	24.225628	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	7	,v:	601	,location:{type:'Point',coordinates:[	120.24735	,	23.465308	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	3	,v:	313	,location:{type:'Point',coordinates:[	121.373519	,	23.097464	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	8	,v:	943	,location:{type:'Point',coordinates:[	120.959158	,	23.486989	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	3	,v:	995	,location:{type:'Point',coordinates:[	120.913939	,	23.875592	]}})
db.logs.insert({	timestamp:new Date()	,d_id:	4	,v:	37	,location:{type:'Point',coordinates:[	120.544994	,	23.711853	]}})
*/

db.logs.findOne();
//{
//    "_id" : ObjectId("556172a53004b760dde8a488"),
//    "d_id" : ObjectId("556172a53004b760dde8a443"),
//    "v" : 6205,
//    "timestamp" : ISODate("3129-12-13T02:03:17.906Z"),
//    "location" : {
//    "type" : "Point",
//        "coordinates" : [
//        120.31725  , 23.305633
//    ]
//}
//}

// 1. A simple projection

var project = { $project: { device: "$d_id", value: "$v", _id : 0 } };
db.logs.aggregate( project );

// 1.1 Results
//{ "device" : ObjectId("556172a53004b760dde8a443"), "value" : 6205 }
//{ "device" : ObjectId("556172a53004b760dde8a43f"), "value" : 3467 }
//{ "device" : ObjectId("556172a53004b760dde8a457"), "value" : 3535 }
//{ "device" : ObjectId("556172a53004b760dde8a45d"), "value" : 5196 }
//{ "device" : ObjectId("556172a53004b760dde8a430"), "value" : 5063 }
//{ "device" : ObjectId("556172a53004b760dde8a45b"), "value" : 3429 }
//{ "device" : ObjectId("556172a53004b760dde8a433"), "value" : 2791 }
//{ "device" : ObjectId("556172a53004b760dde8a448"), "value" : 3024 }
//{ "device" : ObjectId("556172a53004b760dde8a43b"), "value" : 6727 }
//Type "it" for more


// 2. Grouping

var group = { $group: {_id: "$device", average: { "$avg": "$value"} } };
db.logs.aggregate( project, group );

// 2.1 Results
//{ "_id" : ObjectId("556172a53004b760dde8a469"), "average" : 4435.75 }
//{ "_id" : ObjectId("556172a53004b760dde8a47b"), "average" : 5881.725490196079 }
//{ "_id" : ObjectId("556172a53004b760dde8a470"), "average" : 5089.471910112359 }
//{ "_id" : ObjectId("556172a53004b760dde8a47f"), "average" : 5509.420168067227 }
//{ "_id" : ObjectId("556172a53004b760dde8a458"), "average" : 4940.489795918367 }
//Type "it" for more


// 3. Add To Set

var projectTypes = {
    $project: {
        device: "$d_id",
        value: "$v",
        _id : 0,
        type: "$type"
    }
};

var add2Set = {
    $group: {
        _id: "",
        sensorType: {
            $addToSet: "$type"
        }
    }
};

db.devices.aggregate( projectTypes, add2Set );

// 3.1 Result


// 4. Match by Geo Location
// Return all sensors within 5 kilometers of my position

var loc = { type: "Point", coordinates: [ 120.31725  , 23.305633 ] };
var geoMatch = {
    location: {
        $geoNear: { $geometry: loc, $maxDistance: 50000 }
    }
};
var match = { $match: geoMatch };
db.logs.aggregate( match )

// 4.1 Result
//{ "d_id" : 4, "v" : 680, "location" : { "type" : "Point", "coordinates" : [ 120.31725, 23.305633 ] } }
//{ "d_id" : 8, "v" : 997, "location" : { "type" : "Point", "coordinates" : [ 120.24735, 23.465308 ] } }
//{ "d_id" : 8, "v" : 727, "location" : { "type" : "Point", "coordinates" : [ 120.432906, 23.495911 ] } }
//{ "d_id" : 7, "v" : 766, "location" : { "type" : "Point", "coordinates" : [ 120.205067, 22.993642 ] } }


// 5. Output To A Collection

var groupByDevice = { $group: {_id: "$device", average: { "$avg": "$value"} } }
var projectGeoJson =
var iCommandTheeOutDemon = { $out: "paths" };
db.logs.aggregate( groupByDevice, projectGeoJson, iCommandTheeOutDemon )

// 5.1 Results: Find one sample document.

db.paths.findOne()
//{
//    "_id" : ObjectId("556172a53004b760dde8a42c"),
//    "coordinates" : [
//    [
//        -14.460004595311432,
//        53.96892154407959
//    ],
//    [
//        -127.88437751912434,
//        -13.702923069362384
//    ],
//    ...I
//



// ?. Bonus Aggregation: Calculate Variance!
var bonus_agg = [
{ "$project" : {
    mean: "$meanSpd",
        spdDiffSqrd : {
        "$map" : {
            "input": {
                "$map" : {
                    "input" : "$speeds",
                        "as" : "samp",
                        "in" : { "$subtract" : [ "$$samp", "$meanSpd" ] }
                }
            },
            as: "df", in: { $multiply: [ "$$df", "$$df" ] }
        } } } },
    { $unwind: "$spdDiffSqrd" },
    { $group: { _id: {mean: "$mean", variance: { $avg: "$spdDiffSqrd" } } }
];

// ?.Result: Fun Fact:
//    Each pipeline operator is an Abstract Syntax Tree (AST) represented in JSON!
