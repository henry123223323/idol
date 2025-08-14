import express from "express";
import fetch from "node-fetch";
import cors from "cors";  // 新增

const app = express();


// 允許所有來源（開發測試用）
app.use(cors());
const API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNkYTBjOWQ2LTc0OGQtNGQyMy1hMWM3LTBlZDA4NWE3NDQ0ZCIsImlhdCI6MTc1NTE3MDE0OSwic3ViIjoiZGV2ZWxvcGVyLzYwMGQzYjNiLTZlYjctOTM4NC02MmEyLTdmMjIxNWJiYWM5YSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTIzLjIwNS4zMC42OCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.7kUacOItZUjVpDojny0IK4ehVBuj75cgmpp-GU2-qn-nH14NMBzaJqv7O_lJw43wMMgOWGV8UkbsuuEJMTcGng";

app.get("/player/:tag", async (req, res) => {
    try {
        const tag = encodeURIComponent("#" + req.params.tag);
        const response = await fetch(`https://api.brawlstars.com/v1/players/${tag}`, {
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Accept": "application/json"
            }
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get("/brawlers", async (req, res) => {
    try {
        const response = await fetch(`https://api.brawlstars.com/v1/brawlers}`, {
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Accept": "application/json"
            }
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
