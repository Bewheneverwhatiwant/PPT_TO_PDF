const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const cors = require('cors');

const app = express();
// CORS 미들웨어 사용 - 모든 출처에서의 요청 허용
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
    let promises = req.files.map(file => {
        const pptPath = path.join(__dirname, file.path);
        const pdfPath = pptPath + ".pdf";
        const scriptPath = path.join(__dirname, './scripts/ppt_to_pdf.py');

        return new Promise((resolve, reject) => {
            exec(`"${scriptPath}" "${pptPath}" "${pdfPath}"`, (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve('/download/' + path.basename(pdfPath));
                }
            });
        });
    });

    Promise.all(promises)
        .then(links => res.json({ links }))
        .catch(err => res.status(500).send(err.message));
});

app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'uploads', filename);

    res.download(filepath, filename, { headers: { 'Content-Type': 'application/pdf' } }, err => {
        if (err) {
            res.status(500).send(err);
        }
        fs.unlinkSync(filepath);
    });
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
