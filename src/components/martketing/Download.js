
import React from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DownloadIcon from "@mui/icons-material/Download";
import html2pdf from 'html2pdf.js';

export default function DownloadData() {
  const handleDownload = () => {
    const dashboardElement = document.getElementById("dashboard");

    const options = {
      margin: 1,
      filename: "dashboard.pdf",
      image: { type: "jpeg", quality: 0.8 },
      enableLinks: true,
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      html2canvas: { scale: 2, width: 1550 }
    };

    html2pdf().from(dashboardElement).set(options).save();
  };
  const handleDownloadChartReport = () => {
    const chartElement = document.getElementById("chart");

    const options = {
      margin: 1,
      filename: "chart_report.pdf",
      image: { type: "jpeg", quality: 0.8 },
      enableLinks: true,
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      html2canvas: { scale: 2 }
    };

    html2pdf().from(chartElement).set(options).save();
  };
  return (
    <div className="download">
      <Stack direction="row" spacing={2} sx={{ marginTop: '30px' }}>
        <Button
          variant="outlined"
          onClick={handleDownload}
          sx={{
            width: 87,
            height: 30,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '14px',
            textAlign: 'center',
            color: "black",
            border: "1px solid black",
            textTransform: "none"
          }}
          startIcon={<DownloadIcon />}
        >
          Données
        </Button>

        <Button
          onClick={handleDownloadChartReport}

          sx={{
            width: 87,
            height: 30,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '14px',
            textAlign: 'center',
            color: "white",
            backgroundColor: "black",
            textTransform: "none"
          }}
          startIcon={<DownloadIcon />}
        >
          Rapport
        </Button>
      </Stack>
    </div>
  );
}
