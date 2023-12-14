const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const officeConverter = require('office-converter')();

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
    let promises = req.files.map(file => {
        const pptPath = path.join(__dirname, file.path);
        const pdfPath = pptPath + ".pdf";

        return new Promise((resolve, reject) => {
            officeConverter.generatePdf(pptPath, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    fs.renameSync(result, pdfPath); // result 파일을 최종 pdfPath로 이름 변경
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
