import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public data: Profile | undefined;
  constructor(private profileService: ProfileService) {
    this.data = undefined;
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe((data: Profile) => {
      console.log(data);
      this.data = data;
    });
  }
}
