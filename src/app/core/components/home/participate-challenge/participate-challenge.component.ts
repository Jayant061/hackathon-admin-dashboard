import { Component, input } from '@angular/core';
import { ParticipateChallengeCardComponent } from '../../../../shared/components/participate-challenge-card/participate-challenge-card.component';


@Component({
  selector: 'app-participate-challenge',
  standalone: true,
  imports: [ParticipateChallengeCardComponent],
  templateUrl: './participate-challenge.component.html',
  styleUrl: './participate-challenge.component.scss'
})
export class ParticipateChallengeComponent {
  participateChallengesCardsData=[
    {image:"/assets/icons/reference.svg",
      heading:"Prove your skills",
      description:"Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
    },
    {image:"/assets/icons/community.svg",
      heading:"Learn from community",
      description:"One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
    },
    {image:"/assets/icons/robot.svg",
      heading:"Challenge yourself",
      description:"There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
    },
    {image:"/assets/icons/identificationCard.svg",
      heading:"Earn recognition",
      description:"You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
    }
  ]
}
