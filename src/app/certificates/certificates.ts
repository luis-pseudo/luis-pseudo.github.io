import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CertificatesService } from '../services/certificates-service/certificates';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent implements OnInit {
  certificatesData$!: Observable<any[]>;

  constructor(public certificatesService: CertificatesService) {
    console.log(this.certificatesService);
  }

  ngOnInit() {
    this.certificatesData$ = this.certificatesService.getAll().pipe(
      tap((data) => {
        console.log('Certificates data loaded:', data);
        data.forEach((item, index) => {
          console.log(`Item ${index}:`, {
            name: item.name,
            url: item.url,
            urlType: typeof item.url,
            urlTrimmed: item.url?.trim?.(),
            isTruthy: !!item.url,
          });
        });
      })
    );
  }
}
