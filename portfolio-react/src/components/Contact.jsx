import { useState } from 'react';
import { Card, CardHeader, CardContent, TextField, Button } from '@mui/material';
import { usePortfolio } from '../hooks/usePortfolio';

export default function Contact() {
  const { sendContact } = usePortfolio();
  
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');

  const [projectForm, setProjectForm] = useState({ projTitle: '', projDesc: '', projTags: '', projLinks: '' });
  const [projectStatus, setProjectStatus] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      const res = await sendContact(contactForm);
      setContactStatus(res.message);
      setContactForm({ name: '', email: '', message: '' });
    }
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (projectForm.projTitle && projectForm.projDesc && projectForm.projTags && projectForm.projLinks) {
      setProjectStatus('Project added successfully (Local Simulation)');
      setProjectForm({ projTitle: '', projDesc: '', projTags: '', projLinks: '' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto', paddingBottom: '40px' }}>
      
      <Card variant="outlined">
        <CardHeader title="Contact Me" subheader="Have questions or feedback about my site? I’d love to hear from you." />
        <CardContent style={{ marginTop: '15px' }}>
          <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <TextField label="Your Name" variant="outlined" required
              value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} />
            
            <TextField label="Email Address" type="email" variant="outlined" required
              value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} />
            
            <TextField label="Message" multiline rows={4} variant="outlined" required
              value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})} />

            <Button variant="contained" color="primary" type="submit" style={{ padding: '14px', fontWeight: '600' }}
              disabled={!contactForm.name || !contactForm.email || !contactForm.message}>
              Send message
            </Button>
            
            {contactStatus && <p style={{ color: 'green', marginTop: '10px', fontWeight: '500' }}>{contactStatus}</p>}
          </form>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader title="Add a New Project" subheader="Provide the details below to simulate adding a project to the gallery." />
        <CardContent style={{ marginTop: '15px' }}>
          <form onSubmit={handleProjectSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <TextField label="Project Title" variant="outlined" required
              value={projectForm.projTitle} onChange={e => setProjectForm({...projectForm, projTitle: e.target.value})} />
            
            <TextField label="Project Description" multiline rows={3} variant="outlined" required
              value={projectForm.projDesc} onChange={e => setProjectForm({...projectForm, projDesc: e.target.value})} />
            
            <TextField label="Technologies Used (comma separated)" variant="outlined" required
              value={projectForm.projTags} onChange={e => setProjectForm({...projectForm, projTags: e.target.value})} />

            <TextField label="Project Links (URLs)" variant="outlined" required
              value={projectForm.projLinks} onChange={e => setProjectForm({...projectForm, projLinks: e.target.value})} />

            <Button variant="contained" color="secondary" type="submit" style={{ padding: '14px', fontWeight: '600' }}
              disabled={!projectForm.projTitle || !projectForm.projDesc || !projectForm.projTags || !projectForm.projLinks}>
              Add project
            </Button>
            
            {projectStatus && <p style={{ color: 'green', marginTop: '10px', fontWeight: '500' }}>{projectStatus}</p>}
          </form>
        </CardContent>
      </Card>

    </div>
  );
}