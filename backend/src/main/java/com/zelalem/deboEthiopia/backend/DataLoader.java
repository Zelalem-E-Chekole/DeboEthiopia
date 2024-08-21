package com.zelalem.deboEthiopia.backend;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.zelalem.deboEthiopia.backend.model.Business;
import com.zelalem.deboEthiopia.backend.model.Competition;
import com.zelalem.deboEthiopia.backend.model.Content;
import com.zelalem.deboEthiopia.backend.model.FileType;
import com.zelalem.deboEthiopia.backend.model.FileTypeEnum;
import com.zelalem.deboEthiopia.backend.model.Image;
import com.zelalem.deboEthiopia.backend.model.News;
import com.zelalem.deboEthiopia.backend.model.Project;
import com.zelalem.deboEthiopia.backend.model.Role;
import com.zelalem.deboEthiopia.backend.model.Task;
import com.zelalem.deboEthiopia.backend.model.User;
import com.zelalem.deboEthiopia.backend.model.UserRole;
import com.zelalem.deboEthiopia.backend.repository.BusinessRepository;
import com.zelalem.deboEthiopia.backend.repository.CompetitionRepository;
import com.zelalem.deboEthiopia.backend.repository.ContentRepository;
import com.zelalem.deboEthiopia.backend.repository.FileTypeRepository;
import com.zelalem.deboEthiopia.backend.repository.NewsRepository;
import com.zelalem.deboEthiopia.backend.repository.ProjectRepository;
import com.zelalem.deboEthiopia.backend.repository.RoleRepository;
import com.zelalem.deboEthiopia.backend.repository.TaskRepository;
import com.zelalem.deboEthiopia.backend.repository.UserRepository;
import com.zelalem.deboEthiopia.backend.repository.UserRoleRepository;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private NewsRepository newsRepository;
    
    @Autowired
    private ContentRepository contentRepository;
    
    @Autowired
    private FileTypeRepository fileTypeRepository;
    
    @Autowired
    private BusinessRepository businessRepository;
    
    @Autowired
    private CompetitionRepository competitionRepository;
    
    News news0, news1, news2, news3, news4, news5, news6, news7, news8;
    
    public void saveNewsWithImages() throws IOException {
        byte[] imageBytes = getBytesFromImage("C:\\Users\\Etsubneh\\eclipse2023\\DeboEthiopia\\frontend\\src\\assets\\images\\fixed-ethiopian-flag.png");
    
        if (imageBytes == null || imageBytes == null) {
            System.err.println("Error reading image files.");
            return; // exit if there was an error
        }

        // Updated news items relevant to Ethiopia and community collaboration
        news0 = new News(
            "Enhancing Education with Technology in Ethiopia",
            new Date(),
            "Exploring innovative approaches to improve education access through technology.",
            Arrays.asList("Integrating digital tools in classrooms can bridge educational gaps."),
            Arrays.asList(new Image(news0, imageBytes), new Image(news0, imageBytes))
        );

        news1 = new News(
            "Sustainable Agriculture Practices",
            new Date(),
            "Learn about sustainable farming methods that benefit local farmers.",
            Arrays.asList("Sustainable practices can improve yield while protecting the environment."),
            Arrays.asList(new Image(news1, imageBytes), new Image(news1, imageBytes))
        );

        news2 = new News(
            "Cultural Festival Highlights",
            new Date(),
            "Celebrating Ethiopia's diverse cultures through food, music, and art.",
            Arrays.asList("Join us for the upcoming cultural festival in Addis Ababa!"),
            Arrays.asList(new Image(news2, imageBytes), new Image(news2, imageBytes))
        );

        news3 = new News(
            "Mental Health Awareness Campaign",
            new Date(),
            "Understanding the importance of mental health and available resources.",
            Arrays.asList("Mental health is crucial for individuals and communities alike."),
            Arrays.asList(new Image(news3, imageBytes), new Image(news3, imageBytes))
        );

        news4 = new News(
            "Community Health Initiatives",
            new Date(),
            "Organizations are working to improve public health in rural areas.",
            Arrays.asList("Collaborative efforts can lead to better health outcomes."),
            Arrays.asList(new Image(news4, imageBytes), new Image(news4, imageBytes))
        );

        news5 = new News(
            "Empowering Women Entrepreneurs",
            new Date(),
            "Supporting women-led businesses in Ethiopian communities.",
            Arrays.asList("Empowerment is key to economic growth and sustainability."),
            Arrays.asList(new Image(news5, imageBytes), new Image(news5, imageBytes))
        );

        news6 = new News(
            "Eco-Friendly Cooking Practices",
            new Date(),
            "Promoting sustainable cooking methods that reduce waste.",
            Arrays.asList("Simple changes can make a significant environmental impact."),
            Arrays.asList(new Image(news6, imageBytes), new Image(news6, imageBytes))
        );

        news7 = new News(
            "Youth Leadership Development Programs",
            new Date(),
            "Fostering the next generation of leaders through mentorship.",
            Arrays.asList("Investing in youth leadership benefits society as a whole."),
            Arrays.asList(new Image(news7, imageBytes), new Image(news7, imageBytes))
        );

        news8 = new News(
            "Advancing Renewable Energy Initiatives",
            new Date(),
            "Exploring the shift towards renewable energy sources in Ethiopia.",
            Arrays.asList("Renewable energy can drive economic development."),
            Arrays.asList(new Image(news8, imageBytes), new Image(news8, imageBytes))
        );

        newsRepository.save(news0);
        newsRepository.save(news1);
        newsRepository.save(news2);
        newsRepository.save(news3);
        newsRepository.save(news4);
        newsRepository.save(news5);
        newsRepository.save(news6);
        newsRepository.save(news7);
        newsRepository.save(news8);
    }

    @Override
    public void run(String... args) throws Exception {
        // Load sample Users
        createAndSaveUsers();

        // Load sample Roles
        createAndSaveRoles();

        // Load sample Projects
        createAndSaveProjects();

        // Load sample Tasks
        createAndSaveTasks();

        // Load sample UserRoles
        createAndSaveUserRoles();

        // Load example news data
        saveNewsWithImages();
        
        createAndSaveContents();
        
        createAndSaveBusinesses();
        
        createAndSaveCompetitions();
    }

    private void createAndSaveUsers() {
        User user1 = new User("zelalem_tesfaye", "zelalem@example.com", "pass123");
        user1.setFullname("Zelalem Tesfaye");
        userRepository.save(user1);

        User user2 = new User("liliana_aklilu", "liliana@example.com", "pass456");
        user2.setFullname("Liliana Aklilu");
        userRepository.save(user2);

        User user3 = new User("yared_habtemariam", "yared@example.com", "pass789");
        user3.setFullname("Yared Habtemariam");
        userRepository.save(user3);

        User user4 = new User("sara_bekele", "sara@example.com", "pass101");
        user4.setFullname("Sara Bekele");
        userRepository.save(user4);

        User user5 = new User("biruk_tesfaye", "biruk@example.com", "pass202");
        user5.setFullname("Biruk Tesfaye");
        userRepository.save(user5);
    }

    private void createAndSaveRoles() {
        roleRepository.save(new Role("Admin"));
        roleRepository.save(new Role("Contributor"));
        roleRepository.save(new Role("Viewer"));
    }

    private void createAndSaveProjects() {
        projectRepository.save(new Project("Translate 'Understanding Ethiopian Culture' into Amharic", true));
        projectRepository.save(new Project("Community Clean-Up Drive in Addis Ababa", false));
        projectRepository.save(new Project("Youth Empowerment Workshop", true));
        projectRepository.save(new Project("Tech for Good: Local App Development", false));
        projectRepository.save(new Project("Mobile Health Initiative for Rural Areas", true));
    }

    private void createAndSaveTasks() {
        Task task1 = new Task("Coordinate volunteers for clean-up", 5, 8, 6, userRepository.findByUsername("zelalem_tesfaye"));
        task1.setStartDate(LocalDate.now());
        task1.setEndDate(LocalDate.now().plusDays(7));
        task1.setCompleted(false);
        taskRepository.save(task1);

        Task task2 = new Task("Prepare workshops for youth empowerment", 8, 10, 9, userRepository.findByUsername("liliana_aklilu"));
        task2.setStartDate(LocalDate.now());
        task2.setEndDate(LocalDate.now().plusDays(10));
        task2.setCompleted(false);
        taskRepository.save(task2);
        
        // Add more tasks similarly ...
    }

    private void createAndSaveUserRoles() {
        UserRole userRole1 = new UserRole(userRepository.findByUsername("zelalem_tesfaye"), roleRepository.findByName("Admin"), projectRepository.findByName("Translate 'Understanding Ethiopian Culture' into Amharic"));
        userRoleRepository.save(userRole1);
        
        // Add more user roles in similar pattern ...
    }
    
    private void createAndSaveContents() {
        FileType Video = new FileType(FileTypeEnum.VIDEO);
        fileTypeRepository.save(Video);
        FileType Image = new FileType(FileTypeEnum.IMAGE);
        fileTypeRepository.save(Image);
        
        Content video1 = new Content("Introduction to Amharic Language", "A brief course on the basics of Amharic.", Video);
        Content image1 = new Content("Ethiopian Traditional Garment Guide", "A visual guide on traditional Ethiopian attire.", Image);

        // Save contents to the repository
        contentRepository.save(video1);
        contentRepository.save(image1);
    }
    
    private void createAndSaveBusinesses() throws IOException {
        byte[] imageBytes = getBytesFromImage("C:\\Users\\Etsubneh\\eclipse2023\\DeboEthiopia\\frontend\\src\\assets\\images\\fixed-ethiopian-flag.png");
        
        // Sample businesses that resonate with community needs
        Business business1 = new Business("Ethiopian Arts & Crafts Bazaar", "Daniel Asfaw", 
            "Showcasing handmade Ethiopian crafts and artworks.", 
            "Addis Ababa, Ethiopia", new ArrayList<>(), 
            "Contact info for Ethiopian Arts & Crafts Bazaar");
        business1.getImages().add(new Image(business1, imageBytes));
        businessRepository.save(business1);

        Business business2 = new Business("Habesha Coffee Roasters", "Marta Tesfaye", 
            "Freshly roasted Ethiopian coffee delivered to your door.", 
            "Gondar, Ethiopia", new ArrayList<>(), 
            "Contact info for Habesha Coffee Roasters");
        business2.getImages().add(new Image(business2, imageBytes));
        businessRepository.save(business2);
        
        Business business3 = new Business("Ethiopian Heritage Tours", "Selam Ghebremedhin", 
            "Experience the rich culture and history of Ethiopia.", 
            "Lalibela, Ethiopia", new ArrayList<>(), 
            "Contact info for Ethiopian Heritage Tours");
        business3.getImages().add(new Image(business3, imageBytes));
        businessRepository.save(business3);
        
        // Additional businesses can be added likewise
    }

    private void createAndSaveCompetitions() {
        if (competitionRepository.count() > 0) {
            return; // Prevent reloading data if already exists
        }

        Competition competition1 = new Competition(
                "Cultural Art Exhibition",
                "Featured Artists",
                "Showcase your artistic creations celebrating Ethiopian heritage.",
                LocalDateTime.now().plusDays(1),
                LocalDateTime.now().plusDays(30)
        );

        Competition competition2 = new Competition(
                "Innovative Tech Solutions",
                "Engineering Community",
                "Present your innovative tech solutions addressing local challenges.",
                LocalDateTime.now().plusDays(5),
                LocalDateTime.now().plusDays(25)
        );

        Competition competition3 = new Competition(
                "Best Traditional Recipe Contest",
                "Gastronomy Enthusiasts",
                "Submit your best dish for a chance to be featured in local cookbooks.",
                LocalDateTime.now().plusDays(3),
                LocalDateTime.now().plusDays(20)
        );
        
        competitionRepository.saveAll(Arrays.asList(competition1, competition2, competition3));
    }

    private byte[] getBytesFromImage(String imagePath) throws IOException {
        return Files.readAllBytes(Paths.get(imagePath));
    }
}