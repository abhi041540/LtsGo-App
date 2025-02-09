import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import session from "express-session";
import crypto from "crypto";
import MongoStore from "connect-mongo";
import { jsonrepair } from "jsonrepair";
const key = "5ae2e3f221c38a28845f05b6d8fd638824072f0047599ab5a2a56448";
const dburl = "mongodb+srv://abhi:ltsgo952102@ltsgo.664dq.mongodb.net/usersession?retryWrites=true&w=majority&appName=ltsgo"
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors(
    {
        origin: true,
        credentials: true
    }
));
app.use(session({
    name: "LtsGo",
    resave: false,
    saveUninitialized: true,
    secret: crypto.randomBytes(32).toString("hex"),
    store: MongoStore.create({ mongoUrl: dburl }),
    cookie: { maxAge: 180 * 60 * 60 }

}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("build"));

app.use(async (req, res, next) => {
    if (!req.session.data) {
        req.session.data = await [];
    }
    if (!req.session.placedata) {
        req.session.placedata = await [];
    }
    next();
});

app.get("/", async (req, res) => {
    await res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/data/:city/:radious/:rating", async (req, res) => {

    await res.redirect("/");
});
app.get("/data/:name", async (req, res) => {

    await res.redirect("/");
});
app.get("/Nodata", async (req, res) => {

    await res.redirect("/");

});
app.post("/data/search", async (req, resp) => {

    const radius = await parseInt(req.body.radius) * 1000;
    // console.log(req.body.rating)
    const name = await req.body.name;
    const rating = req.body.rating;
    // console.log(name + "," + rating + "," + radius);
    if (req.session.data.length == 0) {
        await https.get("https://api.opentripmap.com/0.1/en/places/geoname?name=" + name + "&apikey=" + key, (res) => {
            res.on('data', (d) => {
                const data1 = JSON.parse(d);
                //  console.log(data1);
                if (req.body.rating == "false") {
                    https.get("https://api.opentripmap.com/0.1/en/places/radius?radius=" + radius + "&lon=" + data1["lon"] + "&lat=" + data1["lat"] + "&src_geom=wikidata&src_attr=wikidata&format=json&apikey=" + key, (res) => {
                        res.on('data', (d) => {
                            // console.log(d);
                            var data2,d1;
                            try {
                                const d2 = d.toString();
                                d1= jsonrepair(d2);
                             
                            }
                            catch (e) {
                                console.error(e);
                            }
                            finally
                            {
                                if(d1)
                                data2 = JSON.parse(d1);
                            }

                            const sesdata = { name: name, radius: radius, rating: rating, data: data2 };
                            req.session.data.push(sesdata);
                            req.session.save();
                            resp.json(data2);

                        });

                    }).on('error', (e) => {
                        console.error(e);
                    });
                }
                else {
                    https.get("https://api.opentripmap.com/0.1/en/places/radius?radius=" + radius + "&lon=" + data1["lon"] + "&lat=" + data1["lat"] + "&src_geom=wikidata&src_attr=wikidata&rate=" + (req.body.rating) + "&format=json&apikey=" + key, (res) => {
                        res.on('data', (d) => {
                            var data2,d1;
                            try {
                                const d2 = d.toString();
                                d1= jsonrepair(d2);
                           
                            }
                            catch (e) {
                                console.error(e);
                            }
                            finally
                            {
                                if(d1)
                                    data2 = JSON.parse(d1);
                            }

                            const sesdata = { name: name, radius: radius, data: data2, rating: rating };
                            req.session.data.push(sesdata);
                            req.session.save();
                            resp.json(data2);
                        });

                    }).on('error', (e) => {
                        console.error(e);
                    });
                }

            });

        }).on('error', (e) => {
            console.error(e);
        });
    }
    else {
        var ind = await req.session.data.findIndex((x) => {
            if (x.name == name && x.radius == radius && x.rating == rating) {
                return (true);
            }
        });
        if (ind != -1) {
            await resp.json(req.session.data[ind].data);
            // console.log(req.session.data[ind].data);
        }
        else {
            await https.get("https://api.opentripmap.com/0.1/en/places/geoname?name=" + (name) + "&apikey=" + key, (res) => {
                res.on('data', (d) => {
                    const data1 = JSON.parse(d);
                    // console.log(data1);
                    if (req.body.rating == "false") {
                        https.get("https://api.opentripmap.com/0.1/en/places/radius?radius=" + radius + "&lon=" + data1["lon"] + "&lat=" + data1["lat"] + "&src_geom=wikidata&src_attr=wikidata&format=json&apikey=" + key, (res) => {
                            res.on('data', (d) => {
                                var data2,d1;
                                try {
                                    const d2 = d.toString();
                                   d1 = jsonrepair(d2);
                                 
                                }
                                catch (e) {
                                    console.error(e);
                                }
                                finally
                                {
                                    if(d1)
                                        data2 = JSON.parse(d1);
                                }

                                const sesdata = { name: name, radius: radius, data: data2, rating: rating };
                                req.session.data.push(sesdata);
                                req.session.save();
                                resp.json(data2);

                            });

                        }).on('error', (e) => {
                            console.error(e);
                        });
                    }
                    else {
                        https.get("https://api.opentripmap.com/0.1/en/places/radius?radius=" + radius + "&lon=" + data1["lon"] + "&lat=" + data1["lat"] + "&src_geom=wikidata&src_attr=wikidata&rate=" + (req.body.rating) + "&format=json&apikey=" + key, (res) => {
                            res.on('data', (d) => {
                                var data2, d1;
                                try {
                                    const d2 = d.toString();
                                    d1 = jsonrepair(d2);

                                }
                                catch (e) {
                                    console.error(e);
                                }
                                finally {
                                    if(d1)
                                data2 = JSON.parse(d1);
                                }
                                const sesdata = { name: name, radius: radius, data: data2, rating: rating };
                                req.session.data.push(sesdata);
                                req.session.save();
                                resp.json(data2);
                            });

                        }).on('error', (e) => {
                            console.error(e);
                        });
                    }

                });

            }).on('error', (e) => {
                console.error(e);
            });
        }
    }

});

app.post("/explore/data", async (req, res) => {
    const xid = await req.body.xid;
    const lat = await req.body.lat;
    const lon = await req.body.lon;
    const rate = await req.body.rate;
    const kinds = await req.body.kinds;
    const name = await req.body.name;
    let response = await "process";
    if (req.session.placedata.length == 0) {
        await https.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${key}`, (res) => {
            res.on('data', (d) => {
                var data2;
                var data3,d1;
                try {
                    const d2 = d.toString();
                  d1 = jsonrepair(d2);
                    
                }
                catch (e) {
                    console.error(e);
                    response = "error";
                }
                finally
                {
                    if(d1)
                    data2 = JSON.parse(d1);
                }
                //   console.log(data2);
                https.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=${data2.name}`, (respon) => {
                    respon.on('data', (d) => {
                        var d1;
                        try {
                            const d2 = d.toString();
                            d1 = jsonrepair(d2);

                        }
                        catch (e) {
                            console.error(e);
                            response = "error";
                        }
                        finally {
                            if(d1)
                                data3 = JSON.parse(d1);
                            // console.log(data3);
                            const placedata1 = { name: name, lat: lat, lon: lon, rate: rate, kinds: kinds, data: data2, imagedata: data3 };
                            req.session.placedata.push(placedata1);
                            req.session.save();
                        }
                    });
                });


            });
        });
    }
    else {
        const ind = await req.session.placedata.findIndex((x) => (x.lat == lat && x.lon == lon));
        if (ind != -1) {
            // console.log("data exists");
            console.log(req.session.placedata[ind]);
        }
        else {
            await https.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${key}`, (res) => {
                res.on('data', (d) => {
                    var data2, data3, d1;
                    try {
                        const d2 = d.toString();
                        d1 = jsonrepair(d2);

                    }
                    catch (e) {
                        console.error(e);
                        response = "error";
                    }
                    finally {
                        data2 = JSON.parse(d1);
                    }
                    //    console.log(data2);
                    https.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=${data2.name}`, (respon) => {
                        respon.on('data', (d) => {
                            let d1;
                            try {
                                const d2 = d.toString();
                                d1 = jsonrepair(d2);

                            }
                            catch (e) {
                                console.error(e);
                                response = "error";
                            }
                            finally {
                                data3 = JSON.parse(d1);
                                // console.log(data3);
                                const placedata1 = { name: name, lat: lat, lon: lon, rate: rate, kinds: kinds, data: data2, imagedata: data3 };
                                req.session.placedata.push(placedata1);
                                req.session.save();
                            }
                        });
                    });
                });
            });
        }
    }
    // console.log(xid+","+name+","+rate+","+lat+","+lon);
    await res.send(response);
});

app.get("/placedata/:name/:xid/:rate", async (req, res) => {
    const name = await req.params.name;
    // console.log(name);

    const ind = await req.session.placedata.findIndex((x) => (x.name == name));
    if (ind != -1) {
        // console.log(req.session.placedata[ind]);
        res.json(req.session.placedata[ind]);
    }
    else {
        res.send("process");
    }
});

const port = process.env.PORT || 3001;
app.listen(`${port}`, () => {
    console.log("startes in port:" + port);
});
