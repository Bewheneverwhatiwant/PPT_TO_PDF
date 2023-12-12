# ppt_to_pdf.py
import sys
import comtypes.client

def ppt_to_pdf(input_file, output_file):
    powerpoint = comtypes.client.CreateObject("Powerpoint.Application")
    powerpoint.Visible = 1

    deck = powerpoint.Presentations.Open(input_file, WithWindow=False)
    deck.SaveAs(output_file, 32)  # 32 for ppSaveAsPDF
    deck.Close()
    powerpoint.Quit()

if __name__ == "__main__":
    ppt_to_pdf(sys.argv[1], sys.argv[2])
