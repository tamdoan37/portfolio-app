import { Card, CardHeader, CardContent } from '@mui/material';

export default function Resume() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Card>
                <CardHeader
                    title={<span style={{ fontSize: '2rem' }}>My Resume</span>}
                    style={{ background: '#39458d', color: 'white', padding: '24px', borderRadius: '4px 4px 0 0' }}
                />

                <CardContent style={{ padding: '32px' }}>
                    <section style={{ marginBottom: '24px' }}>
                        <h3 style={{ color: '#3f51b5', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>Objective</h3>
                        <p style={{ marginTop: '8px' }}>Applying my skills in software development and math tutoring.</p>
                    </section>

                    <section style={{ marginBottom: '24px' }}>
                        <h3 style={{ color: '#3f51b5', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>Education</h3>
                        <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>2015–2019: Greenway High School</li>
                            <li>2019–2021: Associate Degree — Glendale Community College</li>
                            <li>2022–present: Northcentral Technical College</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '24px' }}>
                        <h3 style={{ color: '#3f51b5', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>Experience</h3>
                        <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>2018–2019: Team leader in a Math study group</li>
                            <li>2019–2021: Math Tutor — Glendale Community College</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '24px' }}>
                        <h3 style={{ color: '#3f51b5', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>Skills</h3>
                        <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                            <li>Fast, accurate typing</li>
                        </ul>
                    </section>

                    <section>
                        <h3 style={{ color: '#3f51b5', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>Achievements</h3>
                        <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Presidential List: 2019, 2020</li>
                            <li>1st place — Math Competition</li>
                        </ul>
                    </section>
                </CardContent>
            </Card>
        </div>
    );
}