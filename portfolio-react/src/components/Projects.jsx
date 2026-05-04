import { useState } from 'react';
import { Card, CardHeader, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { usePortfolio } from '../hooks/usePortfolio';

export default function Projects() {
  const { projects, loading } = usePortfolio();
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologiesUsed.includes(filter));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Card>
        <CardHeader title="My Projects" />
        <CardContent style={{ marginTop: '15px' }}>
          <FormControl variant="outlined" style={{ minWidth: 200 }}>
            <InputLabel>Filter by Tech</InputLabel>
            <Select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)} 
              label="Filter by Tech"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="HTML">HTML</MenuItem>
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="CSS">CSS</MenuItem>
              <MenuItem value="Angular">Angular</MenuItem>
              <MenuItem value="PHP">PHP</MenuItem>
              <MenuItem value="MySQL">MySQL</MenuItem>
            </Select>
          </FormControl>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {loading ? <p>Loading projects...</p> : filteredProjects.length > 0 ? (
              filteredProjects.map(p => (
                <Card key={p.id} style={{ backgroundColor: '#fafafa', border: '1px solid #e5e7eb' }}>
                  {/* FIX IS ON THIS LINE BELOW */}
                  <CardHeader title={<span style={{ fontSize: '1.2rem' }}>{p.title}</span>} />
                  <CardContent style={{ marginTop: '10px' }}>
                    <p>{p.description}</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '15px' }}>
                      {p.technologiesUsed.map(tag => (
                        <span key={tag} style={{ background: '#e0e7ff', color: '#3730a3', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '500' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p style={{ padding: '20px' }}>No projects match this filter.</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card style={{ backgroundColor: '#fffbeb', borderLeft: '5px solid #fbbf24' }}>
        <CardHeader title="5 Essential Rules of Cooking" />
        <CardContent style={{ marginTop: '10px', fontWeight: '500' }}>
          <p>1) Have a good knife</p>
          <p>2) Use fresh ingredients</p>
          <p>3) Cook often to build skill</p>
          <p>4) Use recipes as guides, not strict rules</p>
          <p>5) Develop your own style</p>
        </CardContent>
      </Card>
    </div>
  );
}