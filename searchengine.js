
const pages = [
            { title: 'About Us', url: 'individualpage/Aboutus.html' },
            { title: 'Account Section Forms',    url: 'individualpage/Account_Section_Forms.html' },
            { title: 'Achievements', url: 'individualpage/Achievements.html' },
            { title: 'Administration', url: 'individualpage/administration.html' },
            { title: 'Announcements', url: 'individualpage/Announcements.html' },
            { title: 'Academic Calendar', url: 'individualpage/pdfs/Academic_Calendar_2023 (1).pdf' }, 
        { title: 'Board Of Governors', url: 'individualpage/bog.html' },
        { title: 'Booking Of Air tickets', url: 'individualpage/Booking_of_Air_Tickets.html' },
        { title: 'Building And WorkCommitee', url: 'individualpage/BuildingsandWorkCommittee.html' },
        { title: 'Campus Life', url: 'individualpage/campuslife.html' },
        { title: 'Circular Orders', url: 'individualpage/Circulars_Order.html' },
        { title: 'Computer Centre', url: 'individualpage/computer_centre.html' },
        { title: 'Current Events', url: 'individualpage/currentevents.html' },
        { title: 'Curriculum', url: 'individualpage/Curriculum.html' },
         { title: 'Deans', url: 'individualpage/Deans.html' },
        { title: 'Department', url: 'individualpage/Department.html' },
        { title: 'Director', url: 'individualpage/Director.html' },
        { title: 'Current Events', url: 'individualpage/currentevents.html' },
        { title: 'e-notice board', url: 'individualpage/e-notice.html' },    
            { title: 'Engineering Section', url: 'individualpage/Engineering_section.html' } ,
            { title: 'Finance Committee', url: 'individualpage/Finance.html' },
             { title: 'QIP Centre', url: 'individualpage/qipcentre.html' },

            { title: 'Registrar', url: 'individualpage/registrar.html' },
             { title: 'Research+Innovation', url: 'individualpage/Research.html' },
             { title: 'Right to Information Act', url: 'individualpage/rti.html' },
        { title: 'Schools', url: 'individualpage/schools.html' },
        { title: 'Senate', url: 'individualpage/Senate.html' },
        { title: 'Sports', url: 'individualpage/sports.html' },
        ,
        { title: 'SRICCE Cell Forms', url: 'individualpage/SRICCE_Cell_Forms.html' },
        { title: 'Staff Recruitment', url: 'individualpage/staffrecruitment.html' },

        { title: 'Staffs', url: 'individualpage/staffs.html' },
        { title: 'Stores & Purchase', url: 'Stores_&_Purchase_Forms/.html' },
            { title: 'Students Branch', url: 'individualpage/Studentsbranch.html' },
        { title: 'Study At IIITDM', url: 'individualpage/staffrecruitment.html' },

        { title: 'Tender Notice', url: 'individualpage/Tender.html' },
        { title: 'Ph.D. Synopsis & Thesiss', url: 'individualpage/Thesis_templates.html' },
        { title: 'Wardens', url: 'individualpage/wardens.html' }
        , 
// { title: 'Innovation Initiatives', url: 'individualpage/Innovation_Initiatives.html' },

 { title: 'Institute fee (HDFC Qfix)', url: 'https://paydirect.eduqfix.com/app/l0loP15A7lrlpMfUGJIBeNpuGA9MtVcA15XKARSY4F0oj47Dmb28w51Bf03FTgQc/5879' },
        { title: 'Other fee (SBI e-collect)', url: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm' }
  
            
        ];

        function showSuggestions() {
            var searchQuery = document.getElementById('search-input').value.toLowerCase();
            var suggestionsList = document.getElementById('suggestions-list');
            suggestionsList.innerHTML = '';

            if (searchQuery.length > 0) {
                var matchingPages = pages.filter(function (page) {
                    return page.title.toLowerCase().includes(searchQuery);
                });

                if (matchingPages.length > 0) {
                    matchingPages.forEach(function (page) {
                        var suggestionItem = document.createElement('li');
                        var suggestionLink = document.createElement('a');
                        suggestionLink.href = page.url;
                        suggestionLink.textContent = page.title;
                        suggestionItem.appendChild(suggestionLink);
                        suggestionsList.appendChild(suggestionItem);
                    });
                    suggestionsList.style.display = 'block';
                } else {
                    suggestionsList.style.display = 'none';
                }
            } 
            else {
                suggestionsList.style.display = 'none';
            }
        }

        document.addEventListener('click', function (event) {
            var suggestionsList = document.getElementById('suggestions-list');
            if (!suggestionsList.contains(event.target)) {
                suggestionsList.style.display = 'none';
            }
        });