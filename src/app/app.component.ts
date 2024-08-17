import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<blockquote>Patience is a key element of success.</blockquote>
    <blockquote>
      If you think your teacher is tough, wait till you get boss
    </blockquote>
    <blockquote>Life is not fair — get used to it!</blockquote>
    <blockquote>
      Success is a lousy teacher. Це seduces smart people in thinking they can't
      lose
    </blockquote>
    <blockquote>Be nice to nerds..</blockquote>
    Bill Gates
    <img
      src="	https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"
      width="150"
    />
    <div style="width: 70rem; margin-top:15px">
      William Henry Gates III (born October 28, 1955) is an American business
      magnate best known for co-founding the software company Microsoft with his
      childhood friend Paul Allen. During his career at Microsoft, Gates held
      the positions of chairman, chief executive officer (CEO), president, and
      chief software architect, while also being its largest individual
      shareholder until May 2014.[a] He was a pioneer of the microcomputer
      revolution of the 1970s and 1980s. Gates was born and raised in Seattle,
      Washington. In 1975, he and Allen founded Microsoft in Albuquerque, New
      Mexico. Gates led the company as its chairman and chief executive officer
      until stepping down as CEO in January 2000, succeeded by Steve Ballmer,
      but he remained chairman of the board of directors and became chief
      software architect. During the late 1990s, he was criticized for his
      business tactics, which were considered anti-competitive.
    </div>
    <a href="https://en.wikipedia.org/wiki/Bill_Gates">Wiki</a><br />
    <a href="https://www.gatesfoundation.org/">Gates Foundation</a><br />
    <a href="https://www.gatesnotes.com/">Gates Notes</a><br />
    <a href="https://twitter.com/billgates">Twitter</a> `,
})
export class AppComponent {
  title = 'AngularDemo';
}
