import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-news-feed',
  templateUrl: './dashboard-news-feed.component.html',
  styleUrls: ['./dashboard-news-feed.component.scss'],
})
export class DashboardNewsFeedComponent implements OnInit {
  newsFeeds: any = [];
  isDashboardLoading: boolean = true;
  isLoadingMoreNews: boolean = false;

  constructor() {
    this.newsFeeds = [
      {
        type: 'COMMIT',
        data: {
          total: 6,
          user: 'droidLight',
          user_avatar:
            'https://avatars.githubusercontent.com/u/35873371?s=64&v=4',
          repo: 'Wignesh/gh-clone',
          date: '2 hours ago',
          branch: 'sibi',
          commits: [
            {
              id: 'f434b98',
              message: 'updated build files',
              avatar:
                'https://camo.githubusercontent.com/2623bbad5fd70d3b5099ec5b795557ae957fce424956bd21e57efdd1137fa2a3/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f37323165333665623934393130656630356265366138616332353037643966363f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430',
            },
            {
              id: '061e9a5',
              message: 'installed package.json during npm i package.json',
              avatar:
                'https://camo.githubusercontent.com/2623bbad5fd70d3b5099ec5b795557ae957fce424956bd21e57efdd1137fa2a3/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f37323165333665623934393130656630356265366138616332353037643966363f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430',
            },
          ],
        },
      },
      {
        type: 'COMMIT',
        data: {
          total: 1,
          user: 'Dhuvaraggn',
          user_avatar:
            'https://avatars.githubusercontent.com/u/34213472?s=64&v=4',
          repo: 'Wignesh/gh-clone',
          date: '4 hours ago',
          branch: 'ajith',
          commits: [
            {
              id: 'b1a36ee',
              message: 'shared profile description component added',
              avatar:
                'https://camo.githubusercontent.com/2623bbad5fd70d3b5099ec5b795557ae957fce424956bd21e57efdd1137fa2a3/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f37323165333665623934393130656630356265366138616332353037643966363f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430',
            },
          ],
        },
      },
      {
        type: 'RELEASE',
        data: {
          user: 'TwinProduction',
          user_avatar:
            'https://avatars.githubusercontent.com/u/15699766?s=64&v=4',
          repo: 'TwinProduction/gatus',
          date: '5 days ago',
          version: '2.7.0',
          release_notes: {
            p: '',
            ul: {
              li: [
                'Added support for StartTLS protocol - Thanks to @gopher-johns #120',
                'Fixed an issue with partially invalid JSONPath not returning an error #122',
                'Errors are no longer duplicated #123',
                'Fixed UI issue wi…',
              ],
            },
          },
          reactions: ['👍 7', '🎉 2'],
        },
      },
      {
        type: 'STARRED',
        data: {
          user: 'mholt',
          user_avatar:
            'https://avatars.githubusercontent.com/u/1128849?s=64&v=4',
          repo: 'organicmaps/organicmaps',
          date: '5 days ago',
          p: '🍃 Organic Maps is an Android & iOS offline maps app for travelers, tourists, hikers, and cyclists based on top of crowd-sourced OpenStreetMap data…',
          language: 'C++',
          lang_color: '#f34b7d',
          stars: '1.9k',
          updated_date: 'Jun 23',
        },
      },
      {
        type: 'CREATED',
        data: {
          user: 'ahmetb',
          user_avatar:
            'https://avatars.githubusercontent.com/u/159209?s=64&v=4',
          repo: 'grpcoin/example-cli-node',
          date: 'on 25 may',
          p: 'Example CLI for paper trading in Node.js+TypeScript',
          updated_date: 'Jun 16',
        },
      },
      {
        type: 'FORKED',
        data: {
          user: 'ahmetb',
          user_avatar:
            'https://avatars.githubusercontent.com/u/159209?s=64&v=4',
          repo: {
            from: 'heroku-examples/go-websocket-chat-demo',
            to: 'ahmetb/go-websocket-chat-demo',
          },
          date: 'on 11 may',
          p: '',
          language: 'Go',
          lang_color: '#00add8',
          stars: '90',
          updated_date: 'Jun 15',
        },
      },
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDashboardLoading = false;
    }, 1000);
  }

  loadMoreNews() {
    this.isLoadingMoreNews = true;
    setTimeout(() => {
      this.newsFeeds.push(
        ...[
          {
            type: 'COMMIT',
            data: {
              total: 6,
              user: 'droidLight',
              user_avatar:
                'https://avatars.githubusercontent.com/u/35873371?s=64&v=4',
              repo: 'Wignesh/gh-clone',
              date: '2 hours ago',
              branch: 'sibi',
              commits: [
                {
                  id: 'f434b98',
                  message: 'updated build files',
                  avatar:
                    'https://camo.githubusercontent.com/2623bbad5fd70d3b5099ec5b795557ae957fce424956bd21e57efdd1137fa2a3/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f37323165333665623934393130656630356265366138616332353037643966363f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430',
                },
                {
                  id: '061e9a5',
                  message: 'installed package.json during npm i package.json',
                  avatar:
                    'https://camo.githubusercontent.com/2623bbad5fd70d3b5099ec5b795557ae957fce424956bd21e57efdd1137fa2a3/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f37323165333665623934393130656630356265366138616332353037643966363f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430',
                },
              ],
            },
          },
          {
            type: 'COMMIT',
            data: {
              total: 1,
              user: 'Dhuvaraggn',
              user_avatar:
                'https://avatars.githubusercontent.com/u/34213472?s=64&v=4',
              repo: 'Wignesh/gh-clone',
              date: '4 hours ago',
              branch: 'ajith',
              commits: [
                {
                  id: 'b1a36ee',
                  message: 'shared profile description component added',
                  avatar:
                    'https://camo.githubusercontent.com/2623bbad5fd70d3b5099ec5b795557ae957fce424956bd21e57efdd1137fa2a3/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f37323165333665623934393130656630356265366138616332353037643966363f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430',
                },
              ],
            },
          },
          {
            type: 'RELEASE',
            data: {
              user: 'TwinProduction',
              user_avatar:
                'https://avatars.githubusercontent.com/u/15699766?s=64&v=4',
              repo: 'TwinProduction/gatus',
              date: '5 days ago',
              version: '2.7.0',
              release_notes: {
                p: '',
                ul: {
                  li: [
                    'Added support for StartTLS protocol - Thanks to @gopher-johns #120',
                    'Fixed an issue with partially invalid JSONPath not returning an error #122',
                    'Errors are no longer duplicated #123',
                    'Fixed UI issue wi…',
                  ],
                },
              },
              reactions: ['👍 7', '🎉 2'],
            },
          },
          {
            type: 'STARRED',
            data: {
              user: 'mholt',
              user_avatar:
                'https://avatars.githubusercontent.com/u/1128849?s=64&v=4',
              repo: 'organicmaps/organicmaps',
              date: '5 days ago',
              p: '🍃 Organic Maps is an Android & iOS offline maps app for travelers, tourists, hikers, and cyclists based on top of crowd-sourced OpenStreetMap data…',
              language: 'C++',
              lang_color: '#f34b7d',
              stars: '1.9k',
              updated_date: 'Jun 23',
            },
          },
          {
            type: 'CREATED',
            data: {
              user: 'ahmetb',
              user_avatar:
                'https://avatars.githubusercontent.com/u/159209?s=64&v=4',
              repo: 'grpcoin/example-cli-node',
              date: 'on 25 may',
              p: 'Example CLI for paper trading in Node.js+TypeScript',
              updated_date: 'Jun 16',
            },
          },
          {
            type: 'FORKED',
            data: {
              user: 'ahmetb',
              user_avatar:
                'https://avatars.githubusercontent.com/u/159209?s=64&v=4',
              repo: {
                from: 'heroku-examples/go-websocket-chat-demo',
                to: 'ahmetb/go-websocket-chat-demo',
              },
              date: 'on 11 may',
              p: '',
              language: 'Go',
              lang_color: '#00add8',
              stars: '90',
              updated_date: 'Jun 15',
            },
          },
        ]
      );
      this.isLoadingMoreNews = false;
    }, 1500);
  }
}
