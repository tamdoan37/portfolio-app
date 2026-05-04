import { Card, CardHeader, CardContent } from '@mui/material';

export default function Home() {
  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <Card variant="outlined">
        <CardHeader title="Something About Me" />
        <CardContent style={{ marginTop: '16px' }}>
          <p><strong>Hi!</strong> My name is Tam Doan and I am from Phoenix, Arizona. I moved to Wisconsin about 4 months ago with my family. It’s really hot in Arizona, and here in Wisconsin the weather is nice so far—hopefully I’ll like the cold! 😄</p>
          <p style={{ marginTop: '12px' }}>I’m a freshman at Northcentral Technical College majoring in Software Development. I enjoy university–community engagement that helps both individual and collective growth.</p>

          <div className="grid two" style={{ marginTop: '20px' }}>
            <Card style={{ background: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
              <CardContent>
                <h3 style={{ marginBottom: '8px', color: '#3f51b5' }}>Connect</h3>
                <p><a href="https://www.linkedin.com/in/tam-doan-a386167b/" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
                <p style={{ marginTop: '8px' }}><a href="mailto:tddoan@students.ntc.edu">tddoan@students.ntc.edu</a></p>
              </CardContent>
            </Card>

            <Card style={{ background: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
              <CardContent>
                <h3 style={{ marginBottom: '8px', color: '#3f51b5' }}>Fun Facts</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li>Big Seahawks fan</li>
                  <li>Enjoy cooking, music, and traveling</li>
                  <li>Won a League of Legends tournament in college</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card style={{ backgroundColor: '#f0f7ff', borderLeft: '5px solid #3f51b5' }}>
        <CardHeader title="Quotes I Like" />
        <CardContent style={{ marginTop: '12px', fontStyle: 'italic' }}>
          <p>“The computer was born to solve problems that did not exist before.” — Bill Gates</p>
          <p style={{ marginTop: '8px' }}>“Simplicity, carried to the extreme, becomes elegance.” — Jon Franklin</p>
          <p style={{ marginTop: '8px' }}>“Real cooking is more about following your heart than following recipes.” — Unknown</p>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader title="I Enjoy Traveling During the Summer" />
        <CardContent style={{ overflowX: 'auto' }}>
          <table>
            <caption style={{ textAlign: 'left', marginBottom: '8px', color: 'var(--muted)' }}>Famous places I’ve visited</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>State</th>
                <th>What I love</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grand Canyon</td>
                <td>Arizona</td>
                <td>Hidden caves and stunning arid-land formations.</td>
              </tr>
              <tr>
                <td>Havasu Falls</td>
                <td>Arizona</td>
                <td>Blue-green water with breathtaking scenery.</td>
              </tr>
              <tr>
                <td>Olbrich Botanical Gardens</td>
                <td>Wisconsin</td>
                <td>Beautiful gardens and peaceful outdoor environment.</td>
              </tr>
              <tr>
                <td>Cave of the Mounds</td>
                <td>Wisconsin</td>
                <td>Exceptional cave showcasing an underground wonderland.</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ padding: '12px 8px', fontWeight: '600' }}>Total places listed: 4</td>
              </tr>
            </tfoot>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}