package com.zelalem.deboEthiopia.backend.service;

import com.zelalem.deboEthiopia.backend.model.Competition;
import com.zelalem.deboEthiopia.backend.repository.CompetitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompetitionService {

    private final CompetitionRepository competitionRepository;

    @Autowired
    public CompetitionService(CompetitionRepository competitionRepository) {
        this.competitionRepository = competitionRepository;
    }

    // Retrieve all competitions
    public List<Competition> getAllCompetitions() {
        return competitionRepository.findAll();
    }

    // Retrieve a single competition by ID
    public Optional<Competition> getCompetitionById(Long id) {
        return competitionRepository.findById(id);
    }

    // Create a new competition
    public Competition createCompetition(Competition competition) {
        return competitionRepository.save(competition);
    }

    // Update an existing competition
    public Competition updateCompetition(Long id, Competition competitionDetails) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Competition not found with id " + id));

        competition.setTitle(competitionDetails.getTitle());
        competition.setCreator(competitionDetails.getCreator());
        competition.setAssessors(competitionDetails.getAssessors());
        competition.setCompetitors(competitionDetails.getCompetitors());
        competition.setSubmissionStartDate(competitionDetails.getSubmissionStartDate());
        competition.setSubmissionEndDate(competitionDetails.getSubmissionEndDate());
        competition.setAssessmentEndDate(competitionDetails.getAssessmentEndDate());
        competition.setCompetitionCloseDate(competitionDetails.getCompetitionCloseDate());
        competition.setContent(competitionDetails.getContent());

        return competitionRepository.save(competition);
    }

    // Delete a competition
    public void deleteCompetition(Long id) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Competition not found with id " + id));
        competitionRepository.delete(competition);
    }
}