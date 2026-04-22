import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates';
@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent {

  constructor(public certificatesService: CertificatesService) {
    console.log(this.certificatesService);
  }

}
