import React, { Suspense, lazy, useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import Header from '../components/Header/Header.jsx';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Lazy load components
const Projects = lazy(() => import('../components/Projects'));

const ProjectsSection = styled.div`
  padding-top: 80px;
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
`;

function AllProjects({ firebaseData, openModal, setOpenModal }) {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Vishwajeet's Portfolio</title>
      </Helmet>

      <Header 
        Title="Projects Page"
      />
      <ProjectsSection>
        <Suspense>
          <Projects 
            projectsData={firebaseData.projects || []} 
            openModal={openModal} 
            setOpenModal={setOpenModal} 
            defaultfilter="All"
            projectFilters={['All', 'Mern Stack', 'Web Development', 'Others']}
            ViewAllCard={0}
            ShowTitle={null}
            IntroText={1}
          />
        </Suspense>

        {openModal.state && (
          <ProjectDetails 
            projectsData={firebaseData.projects || []} 
            openModal={openModal} 
            setOpenModal={setOpenModal} 
          />
        )}

        <Footer 
          footerData={firebaseData.Bio || {}} 
        />
      </ProjectsSection>
    </>
  );
}

export default AllProjects;
