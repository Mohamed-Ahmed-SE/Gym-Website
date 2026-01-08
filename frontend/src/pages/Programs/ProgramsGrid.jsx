import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramsGrid = ({ programs }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
                <ProgramCard key={program.id} program={program} />
            ))}
        </div>
    );
};

export default ProgramsGrid;
