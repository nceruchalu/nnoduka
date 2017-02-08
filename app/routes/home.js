import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        // Last 2 digits of current year
        var currentYear = 'Present';
                
        // Return the ordered collection of projects that have been worked on
        var projects = [
            {title: 'RingPad',
             snippet: 'VoIP Calls',
             year: '2017 - ' + currentYear,
             type: 'iOS',
             route: 'home.project.ringpad',
             description: 'An iOS app for cheap international calls ' +
                          'initiated over the internet that terminate on ' +
                          'your friends\' actual phones.',
             skills: ['ios', 'backend']
            },
            
            {title: 'Raven',
             snippet: 'File Transfers',
             year: '2016 - ' + currentYear,
             type: 'Web App',
             route: 'home.project.raven',
             description: 'A web app for lightning fast file transfers. ' +
                          'Upload files and share a download link that lasts ' +
                          '1 week.',
             skills: ['web', 'backend']
            },

            {title: 'Volleyy',
             snippet: 'Email Newsletters',
             year: '2016 - ' + currentYear,
             type: 'Web App',
             route: 'home.project.volleyy',
             description: 'A web app for sending beautiful email newsletters ' +
                          'your readers love to read.',
             skills: ['web', 'backend']
            },
            
            {title: 'Gravvy',
             snippet: 'Video Messaging',
             year: '2015',
             type: 'iOS',
             route: 'home.project.gravvy',
             description: 'An iOS app for collaborating with friends on '+
                          'videos. Share short clips with friends and '+
                          'they\'ll respond with their own clips.',
             skills: ['ios', 'backend']
            },
            
            {title: 'Evently',
             snippet: 'Group Events',
             year: '2015',
             type: 'iOS',
             route: 'home.project.evently',
             description: 'An iOS app for event planning with friends. ' +
                          'Vote on options, upload event photos, and say hi '+
                          'over groupchat.',
             skills: ['ios', 'backend']
            },
            
            {title: 'Blabbit',
             snippet: 'Anonymous Conversations',
             year: '2014',
             type: 'iOS',
             route: 'home.project.blabbit',
             description: 'An iOS app for anonymously expressing yourself on '+
                          'ephemeral threads/groupchats. Threads expire and ' +
                          'users stay anonymous.',
             skills: ['ios', 'backend']
            },
            
            {title: 'Retrac',
             snippet: 'Retrace Your Steps',
             year: '2014 - ' + currentYear,
             type: 'iOS',
             route: 'home.project.retrac',
             description: 'An iOS app that makes it easy to get back to ' +
                          'any important location. Never look for your car '+
                          'again!',
             skills: ['ios']
            },
            
            {title: 'EasyPay',
             snippet: 'NFC Payment Kiosks',
             year: '2013',
             type: 'Embedded System',
             route: 'home.project.easypay',
             description: 'An embedded systems project using NFC-enabled ' +
                          'parking meters as payment kiosks for utilities.',
             skills: ['hardware']
            },

            {title: 'NoddyMix',
             snippet: 'Music Playlists',
             year: '2012 - ' + currentYear,
             type: 'Web App',
             route: 'home.project.noddymix',
             description: 'A web app for accessing the latest Nigerian music. '+
                          'Make playlists, share with friends, and play your ' +
                          'music from any device.',
             skills: ['web', 'backend']
            },
            
            {title: 'Software Defined Radio',
             snippet: 'FPGA Implementation',
             year: '2010',
             type: 'Embedded System',
             route: 'home.project.radio',
             description: 'An FPGA-based Software Defined Radio, implemented ' +
                          'using VHDL. ',
             skills: ['hardware']
            },
            
            {title: 'Other Projects',
             snippet: 'Miscellaneous',
             year: '2009 - ' + currentYear,
             type: 'Software & Hardware',
             route: 'home.project.more',
             description: 'Some more web and hardware projects. My earlier ' +
                          'projects that helped me build character.',
             skills: ['web', 'backend', 'hardware']
            }
        ];
        
        return Ember.RSVP.hash({
            projects: projects
        });
    }
});
