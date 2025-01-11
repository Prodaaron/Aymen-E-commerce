const product = [
    {
        productId: 1,
        productImage: 'https://uc42ee37fc54ab4d9067c607906a.previews.dropboxusercontent.com/p/thumb/ACiNVmUzSejh3PShh1qsN-W82UF25gzomnwvlPFIYuh6LFZVa92XbXQupWOm9UF95o0aFLKvFAhuiOGDVCwHSy-HLM2YNY8D8qB7fYMtqRF3lBt3MNErbgZ84Qi9sXvAIQURoUG2oNvmZvugUQ6VEomyXvbPckoMAUIzdKUi-IXj2ZMbUx8ptBO5ZZNdp2J6EP998q7oEBlTkS0q6Hi6lHMq8lnmbEr-1mQRNa3K7P05fJ-gSLhIBLFJiy2XlBfzBy9IbEGf1lMXR7HfmUqu-A9lWF_k6EHdGODefklRGGBLzmfhLf-oZGY82rzx8c86P2KRtKN3PKh2TQsZk8fL9JS5-4KIwVTDW9ph1eS3JVTfJlKP98_-J4fvF1nK52PkTTyKQG2TBqx6G6vQY47rfsuF/p.png?is_prewarmed=true',
        productName: 'Blue Bead - Caramel flavored toping',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 2,
        productImage: 'https://uc04520fa178a125a68b68d59abf.previews.dropboxusercontent.com/p/thumb/ACg4Qw7r7fn8yWRhjI7jKcpsO3IWLRmyV3GEq88aEgqx-jTAiaUYpB9KzKoDX7tEmsEZKGTfmceIx2F5BxH_MbFvdZNWfaihIWZrIHm0oMEYRGQPHddwRZ3URymKjo7gJWxaemRKAGci8unNJt4OQjTVDbxZk28SOQUNCLb82qPET4DAAmRMiTLvmxYlQqxM486lAXSCNGxrcSAO8q8w3FHtgANoujX9cFidL96aEHz-PANVG8y-WNC_uZh5Yva-aEdxqE7rt-BTJjkNVeGtMj1F7cK-ra4E-Ab2EtV-GTR_9FVRWUWs8b5HqGxGl9gcoFg4hq3jCe9NlAvQpZ-MT0ZGtk_I4oBkwZQLaDbC_gn_yA/p.png',
        productName: 'Blue Bead - Chocolate flavored toping',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 3,
        productImage: 'https://uce7aa07f9d50689a57f2e55935b.previews.dropboxusercontent.com/p/thumb/ACh-tHGNQr6-sNySMN2jf8z0S_cuoyneaPPjLvS8kegf1Ue3dFr0Zlnop3_SbPwILokUbbqKBD5RGWJPBYoNwvdB-cCVnsX4RczAnzjBuqbXwdjSTi4oWwYZlN4aOI46gUHfUqHhHlnf6wF8BiZrhf6LWlYSy_4OgGJXbz4C3oirFVrZTggsG-yVoVmmDgHIOpklOQQbZsIOyw0IFZInEg9jkphLBjzDbTmZsx4pJFXYnDXA716lbJoUMcKdKDsWE35DO0ecz6MAIQVAV1AkwnIrWjm4AI9SO-ry2e4NsTZn59DUUraYhBhq76fEqifB8OQFjfcu9CnxRGOePtMS9bDrPvZhF-8giKcirApmLZa0Bw/p.png',
        productName: 'Blue Bead - Cold Glaze caramel flavored',
        productAvailability: 50,
        productDescription: {
            title: 'Blue Bead - Cold Glaze caramel flavored',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 4,
        productImage: 'https://uc01b66c686ba5ee20391f8fad77.previews.dropboxusercontent.com/p/thumb/ACjjFz580xiM-x_rSttgTeXp5VntVF1n6SAwbujgnYdWOsUM8LvbQ7TGGVjeEIIF41fe8wgJqRLbm8GWQplUBfeLJrfqsY1SoHA70l-uqLwZ6nNtpMlmnHKUZVHkKL9Feg8bUNW9UfgUwl1A0GzlImvs8x4Me7S4XMEFUbEJm3zwCThY0I9RRP_PC80pzCUExgYusbfCOYFzVKqJANiiY3MdJyckb6ddCisBaHcqe9TmDCok1BEdA2rfWMJ7KG54dyUNVmyp-fg76Crxc-5RIejuwjdD8oCsQQL8bUYxRdYgwNZuewXxjLzpH9v4iryvd2hTpzCKgSsKkRVG_r-3gyTgxO6gtd5I0i8SFc4xQuw7lA/p.png',
        productName: 'Blue Bead - Cold Glaze chocolate flavored',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 5,
        productImage: 'https://uc9f7e01cbf6525124bdf3d2dff9.previews.dropboxusercontent.com/p/thumb/ACjvP2-SyN6O61hgjHz1y5PUaFkCqxhkWKAaA1N8Z8OvBdB4y2dqRKkK3A-j2WIA3qxHhwV_fxhkcsyReShHxN4QqPJkBqwv6j8_9mlHeks78KLKld-LUyLPcM4oP6mhR6dUOBjMI-IwqsNWAm3eir97sxm9ena_xVye16ANqqbOCDnVQM2EU5ijP5jDOMZNBQgJ6poslXCdP0ggzu5TOx9jdR8GqtgNhj9LN924x5CYtmKhrVsaGWdsqGF6YVxwEt_wHIyphtusICDradZ9SpK3hxEVMyr9a3-74K0wU-kLSZJ0AV8XDR0TQCLDMS6rvuAxMxSiU96Mnygz2G2l0wr943F-33_OX7DFZgKL1MLSwA/p.png',
        productName: 'Blue Bead - Cold Glaze chocolate flavored',
        productAvailability: 50,
        productDescription: {
            title: 'Blue Bead - Cold Glaze chocolate flavored',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 6,
        productImage: 'https://ucd410a185ab6c15657add415f8d.previews.dropboxusercontent.com/p/thumb/ACgxn_8r06u-sT7j750JtJBNu0FMk0ABEXWPrAPGlYvRw9TSvTUaLx4mWT9KcXrjB4DTyxwRdOleiErb5mqcyqR3H3NBMuMHzJNFjT-XdiDPZoYqu5Ije_Y6wOuNLQTVDzZJ2n6ACD_Ro5JVxJ2FeRtCydcgCyxCe8oGETJZIMNdmNUEsPkLiSAXptQRyZ9bgpavaRNyueVn5cLCe8X7NCTETEiCRHLwsKh8sP2URJKKx7dIK582JzU3awrVbbGs8rCgCt8G3eIu-ksMEUFq4L5aiqBFG1_G8Hd_-d6lk4XzUF8gKdDr9D1XYFTUMNN35W04974qxouuJdhXNLhNyo0ElhJ4Ph25gnqhN_fg-zTAvg/p.png',
        productName: 'Blue Bead - Cream patisserie',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 7,
        productImage: 'https://ucb4c952dfd7c6a8d015cccdf6bc.previews.dropboxusercontent.com/p/thumb/ACicgPMBptY380jwtgFaxbrV05M_dtN_j3mtBZvmVpDn5VlyG2GvxVgLOFZmlJ-3Tr6wsmYl5wcjaPZ0v2qZTal0GKk1UmrsiveraNuHcESa4nJI7wQKyq6k2Hynpkz87O3aovoVsDC0Cf4xiMxsnA0NDU938MWZdjWYBEy3-P1cYE4Q1S0os_loq5v1juCNG0ic28bUS1JTI_qcrw-gGSEISrfYaL0ArcEYhk0M7obIkkwSWEsXhT8uldVXzDgPf75f13dDkYae23vClABZwSiZCy6ZuEaoVgZ3EDshe0g-u8lp4-rxH89iGnOugKYWF_zn-DYSyArR20G727iPOlcsUWapdyrp4a_yN8deCsSaKQ/p.png',
        productName: 'Blue Bead - Pandispanya miksi',
        productAvailability: 2,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 8,
        productImage: 'https://uc77542e09c22ac81dac5ff07668.previews.dropboxusercontent.com/p/thumb/ACji3PB-tpUxICaZmkwxD-elFLS5bnGsm_V6eg3k-X8kW8YQ-hpCZS9R8T9IInC3Esneea2iWn-TiS1yN3AiUzEpZ-V6ZKzR_UWZnhEvqbs4kUEiAnT2Wo-Ys5gUo4VYc0tRyQ2FQr1E-JL-EF8coy8gYSUvbOTxZmxEuZ4L8I-lbepO8JE2kKVa7WrI8DfxUey_893Z-Dl6CpaJpm0DKNYXBHbRCidsAxMdJNAV1Jh_z16PJds9_6egn1ouNY74mD-urH_QpT3ue6TnsxZUoWXZSHQXOWZvdz_hpgWPcQDuPSWERwbSouS3d4RggAi4N1bUXbbnBxWVXTq4aTjusQ2k2GA-AuMXFe2Pywo59vAhTQ/p.png',
        productName: 'Blue Bead - Pasta katkl maddesi',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 9,
        productImage: 'https://uce4d42fbcc2ad4054fb5e9515c0.previews.dropboxusercontent.com/p/thumb/AChy7u5Ldwj10zZbgux1E38mL-pzes4tRlJQbENjYaYsJAUHGQz-PWa1lG5F22uNVQLkfrEhNiLBIuA-1z4XN9zIM4yIRkcjC2ZDhNkmz7AFkkDpAoVtlpCk-lkQ-toTjARsh30hGw2hbMYNybWPVCSD9jSzRAX32FGm-PRZ_k-SXMSOJyftIiQ4IcWY9aGd-eQhYWAcfNdbG8mCab36wTKRZq-KTkFxrpkhIMnKar3Unljit-o8z06HsqN_bzOncxpKDRMP7y3-Y8A_4TKIP-UrH4dvtPPr7GV1bNpqTIR-rVN1rMbMtT4gQgn9quC3NTsVzocwEWcAj0MFsYw0_VtitPhmobiev8TLJjJ8UtmIyA/p.png',
        productName: 'Blue Bead - Whipped cream powder',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 10,
        productImage: 'https://uc5cfe5b2ab782cf47bbacf66dd7.previews.dropboxusercontent.com/p/thumb/ACixjPQ07qnTSoUR5EcnIGZeb_J-WcVXWLZQjDAst9JJrvNTi6hVpySUc6R7n9_iPHB7GvGcCsulVRTS-kEAGQnfiQ9WzQhRZmNahaH97gGBJ6s7OhVprcDxlePYXf38oCwMYp0udww1xPeG3T1cERFpIqfaEf7WLHaup15tl6fFK6_RugGWrAznzGDShuQstewCp1xQGQQobLncecNDyClLpZGeQpnguiP6XXem4Kzb9dm4KQpFc0tiGk6hBO_Eyp6LrpbcEMttG3RTUO_u8HIosyTP63fMRegRN64CFZjKasAx1r9ZwWer09dq-c5dItN7IyOYU3K8b8D4t3b1_jfoEq2k315GGj6t7qWl8T155g/p.png',
        productName: 'KataKit - Chocolate Lee',
        productAvailability: 0,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 11,
        productImage: 'https://uc3d82da76fb235f32ec88ccc4b9.previews.dropboxusercontent.com/p/thumb/ACjsvnXgo2UYwFtBah34XDsw9bX57mzqL177Eh034Aafisxuc0z5TbJNqI3CdZwGXelMuLkojjyj7tn9fKpVHyHjq5wBlTHDg7Eeae5PQctf1GxHcY5GVHusu4eEpnY6_XpaCcAk4FayViCg_3ZGKFzywzBBGt6_DEztDH56RNAyLrOrhzou1QZnFD-fQa36ko81_t5XFKaArwY48QxmlQsbRDLPzSlznILPTAGgihMwpsVQwzxQ-OwTAaaTMTS6jl5QTpwsLnWA603YvdIVipVMWa5376KHBP_a8Y7lXNWNyhtBUWZPLceEYRPQFOma3EwH-zlZF8WH-3gYVFcP4woGndKu57waAd7BUniT57CGgw/p.png',
        productName: 'KataKit - Chocolate Lee Wt. 4KG',
        productAvailability: 4,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 12,
        productImage: 'https://ucc84dfae6a750d58d7ccda3a981.previews.dropboxusercontent.com/p/thumb/ACi00dnQYNA6krhE8j64ZELHQVABgpkvJrEG6F5OffNdAeH19G2ZqDlvrVxT0Rl-eTt1TtBAcAoBpRoqkmggobIuWwhUzrlc-SXlY3Syx0Zo82NLk-iZ23LHyI9wPx7aws65TromYw-IYZg1MGz4yr5AuNoiqJM5L5opP95ieykRHhyFINmBLasWX--Xo17-qP6WNr7zdiYSN-ji_xggYOndYE-b-j4yZEU_gJfSRH_3k2aG_XuHWEcfEdM0o7rS_PeG4SiO4bp71Hm0N3m6FCeMiBd23B7Q_tOLgjrSkwrWnrzSXKC-tA3ep9HGbe6rHdL8p0lzvODGFbgKcTTry6CwglRSuiDh6YUZd5h23hn8dQ/p.png',
        productName: 'Kent - Chocolate syrup',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 13,
        productImage: 'https://uc9203c13f5e4b1f09cd6a41d71c.previews.dropboxusercontent.com/p/thumb/AChnZhOFUsc7WwxQ67ufq7PrwdM0QSA3i4wbOBI6MIBvv0CyGeYub9OZranq_Q_YwhyjRayoY7DrLtVJO-hUlIWUEwwxCqEFCn8DL9J4qRqb4f3j_lPT9--ZSp3ZChc4FLJGoeF2j_wczbgJcLQ0ms09w3H3IwRlkV-Co06j8ti_FWdtsdk59Vb1xdgBV2xpioBUE6EKt7aug2Cg6iUJ7Z_A32sc-mamKhOYOFtTYQHzCpoZCkFUbDy6VvnYF-J2shXDo9ycG2Ys9nmWWUV59bvKn2TSo_eI7WN-Gwo_M46sy6sgw6HtrNPRJaQ6OwJGmem-f0pKToA5YDWccoKukUJ3LjUL2b7VvUgmpCxt411FaA/p.png',
        productName: 'Kent - Strawberry syrup',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 14,
        productImage: 'https://uc18bccaaedf400cd2d221762709.previews.dropboxusercontent.com/p/thumb/ACgsilam1a2chzXq3ztgtd4X4C5sVV22LEO2e5Qo7dLVbKR1S1BzSx3O3lLddxEZs0Q0bJGsGdJidJ6ZHEcoK5kjDEvLsneU3DW_sdkxDs7awwyIItmg44riwjB7L_tZXEBz4DoUhsClutOh4oi5JI10u-w7M_S5ovRC_6SWHVa9csJLOSCwbCfNe41WFLmW_E7e_K1-Z-Y4bGLT3-FCEglAiSa9HoWsjRW-BzVpw19xLEiLpLUqoZntk_9IY2OPM5g3cA9UV61F1Q2Tz-Dev0aoT0gFuEEx6rr2Xs6TOXb-65yWORQvw1gj_8T56pmMWT4GbklFl5hPWdIpgcQJwp5-dpUg7n7mvn3IQCr_2T1Gcw/p.png',
        productName: 'Patchee - Chocolate cream paste',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 15,
        productImage: 'https://uc04e02d2bed5d29b364da26df6f.previews.dropboxusercontent.com/p/thumb/ACjToQM6jbAZYZ185GTkmfjZFGUj_0QiZDzPWunynWhP-rcZDvcMqse5h4HEIwNqYY-gzjU1_L1Yq1MTGskNQ-qt3UPI34BR3usuHtGkahNPLEB9zFoo6RCmSJ7j7zlLZNopDVm0-xXnXa5435VzFqtcQzwOz1TZ-aG5bJ3nWvyJ7_L5w0KygacyxMRScWG3LeHCWmHdp4dKGiPIJ4zQrl83EM3Ubze6sBbAh00fmcNSMu4mV-QkfqZ83YgawR6fa8Qg8OLZptwnCWrcGN5F_r8sB2GvgpXgeJSde8IBihiBnSL6a4rGrZcgsskKtMrIrfPuUnLgx1LhW-9g2d9LQkCbyAkMdbl41LkINq8DSS0r3A/p.png',
        productName: 'Patchee - White chocolate cream paste',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 16,
        productImage: 'https://ucc08b3083484cc5f79186ebd561.previews.dropboxusercontent.com/p/thumb/ACgiMTm3kZUvUaZR7iELDoqno_si6TqMKNS6BpG0TYjMWtrY-kHdis1AlnNs0Ym1nXLKFvMO0WMCxrfr4eXENwqY3sysFdgQ2CXHxWuVb1i3f6fy-dQpHJGtQLZKTEEdCMq73wvSePKfs51c4cvTR5ebf4sZHsSg63kmlmF4UTMToelUCv3qLySt8VKMbKqOVZvfNkazcaXzBCr0ewhOMjV0Fvg62A_YzTXSCO20jyfT0_atKZahi30PAKxbQCXwBzZb55nb6ujxiJXcEJxMQViE6N1AvqmdMuZwF2rGmd1T4FZEXkygh_P7CevZ73yzmZH49W3oR5MF5GoEDLym0ZmXMYMFckAm1nRsejb2b7D0Cg/p.png',
        productName: 'Pelik&kano - Whipped cream powder',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 17,
        productImage: 'https://uc04274038ea6a4a65d0c031a187.previews.dropboxusercontent.com/p/thumb/ACjzQeWzuTcIsx-9uf7uYzh9ptxjV_D2Z59ItfUWxxj1mL9vOYAVxhTJS2yAyIq-MYkDNb1zfELJ_eF-vY45oDs3FgVZZ_g-4Cs_qKlQ7pekSDhvpi4oIRkMbTFvnxi7PNXadmJaHuiyY3M9-thSMRK_1-rBqF9a_0LeYjBMwCKRmE0gqCNSeEV4JJJJ3xhsOkq00-tz5BnQwVlFgsZtDqk42c4NbqpY7Ze3-amWtKg6pvcbQaCe9_0XwSib6dYZ7da6ewk7r81hnc4LrR6JY3ov81xj8puZt3qVoSm-g7iqyVhGxRixqfnG2wuRTVa__jp7jU3NYOWs0bMW182m3RcLWjdXxFD5SkwG-omZgCVkUw/p.png',
        productName: 'Powder cream patisserie',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 18,
        productImage: 'https://uc795493ee9bc0c07396973ed44b.previews.dropboxusercontent.com/p/thumb/ACiSR5d5JMK-kMJ17kaZnjdTAN-uAAl0RE__k5Ew_2rc3a1r_gMkHaP2J3BdNXIdXteAniaeEuFj1K02m4voK3AkfdIJDaEJPnSOkyZCOOFkT4U-bRcNMhVGZKddADnlSbML58gKRTJF_AdYdVo-jM8bscHeaOf-C8-QWcBa_dIu4g_E2xt6Ukhn8eawRXoGDb598PjIwyU3ljy40tJD_MGuU18h8Bf3EQr1Y1sJbVycwnwgU5GkETFFo-E0ROgPzOlvg67xmfcdJ4Fgc-HIBXGmdAYgRhtWstxfD0dK0dCeAeTlgEdFJYjl6ln7zzLghLuUa6yuYA2odwdkuuBpT1fQbjla0SZXBzUH06UVL2RHCg/p.png',
        productName: 'Puratos - Brillo caramel',
        productAvailability: 3,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 19,
        productImage: 'https://uc6a7d76f9fa8a63c846450a7b91.previews.dropboxusercontent.com/p/thumb/ACh0lAEc8AruRyorndCoMAXi-i0HLBoimcJ82ne_mGCjEsBHhOe_nCzWaFyxTrCurmAFsJJpIfq_LBlt6WgkizjuiA8ePdSAmuo-N6W7KHhqI-cX7M-gg7ofhNqYK1hDhT1vBZRM_zO6y1fWHbDtuNTALeA8iNnIYYBBqFgYmPkVQIhQvwSajqFHMTHNKUShPCxap8kYtQKUs71SC_Px5I7Q7rqCe0dQSYxmx0V3YkkBMhSbAkne6hHiOSTQnvDplH3Yjhvkx3aiELDJQNbjFQkXV-aWQoWwPj8ZdNBjKV_nr2aEJ7XUNSqsrtOsbs8Qjw9l8ZNSRhAtsQbS16tNap7x0hxw1h_61mlj8i-Tr9_02Q/p.png',
        productName: 'Puratos - Brillo Choco',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 20,
        productImage: 'https://ucafb135d25fdb4fb3a4d505d762.previews.dropboxusercontent.com/p/thumb/ACj4B0TvGMzULlVtpoih29qhs9nINS7t6YUVNC0T52ldSIVI9j4LM-ux5yRoYixkAZQIZBoU75AAnzqYQu_jfHyDTRHfUpi_x6yaF9qSRkwvlRk0H_IoFn8RjDodXxFBj_ZdAIS0_xC_uyOcP2P0zVjHlxGR23JsXJEsZD8u7NAoZ79S2xv0Ei3XKecg50bJCL6cg3mURRtNpqw5n9YEx6D0y1aicbDWVqJZf9ZM7gBLXlzwMgX34p8x-5jrKVV7dfA1qPnGw6z0zn_0bdY99k8G56gfOrQTetDRAw0OGqHUMK9OxS44E9glOjB1NgSGT6uS5DleyS0F4INHjQgCaOkHeuQ4lB2VTV92OgxIbkEbNA/p.png',
        productName: 'Puratos - Brillo Strawberry',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 21,
        productImage: 'https://ucc100fd8fbc71f2686e39212775.previews.dropboxusercontent.com/p/thumb/ACjEqkR0sNy2Z68rIHNRIYba0TlGquL4GK-tIzcxpBtoTYtLpZIHHtyPkARPWpOuEUqTtAtBfxWBvKwy5M9opnv655siTXWe3UO9lqjBomHWpi46XYKU90I9RaT0oywQCvvLDRl8xc7jO_-kCcIB6Nz5i_3_KhfMYiRyUCiLJXSOZGr9ft6gi9bgPd812X8WyMkO09M2cYghIwWdj7hfDCSG61XpoH7792JbLTjIBJJOzRPXmOyAOhlPHvb-osFrEQgJc9eOTq_5HlBgztLioL2ZC8ozSrsDEPS-KeEm86NZRf7keiFTnGJ_j--0j53qyUMlQRjQGmsbKF_dsu7yBihdNVWjGMDdTjuHQaCUA9T9WA/p.png',
        productName: 'Puratos - Diana whipped cream',
        productAvailability: 0,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 22,
        productImage: 'https://uc96a565f965584cca86592dd4b6.previews.dropboxusercontent.com/p/thumb/ACiheOnLHltoI0Uc-CeZVPTyEtvj2ZND1HOZ1Wgivfil5bMKFHYV0DsyLAbkSTRp412EspVn4rpOV5q7A_G8E4w52NhvyI65Zs4e0KPGtq9iBJFiNIZ3P06YbG7lLjfGh8C4o5hd1hJNc28Hrk7OWHRvLnYnymSTNTTsf7iSByJtipx6PZEkcYnH5E0axovhswtvwJoWTOiU2PsuCmLDKv5T2IW7BmqRBt-IDHhH4yNXQLCy7jL8tK7Z4i-JZ6GeEivJOS13znF1fkYe-Tu63ZU9_x4E-9mwakJ3Cpfiu5XkcKK-ySf6v4wi-Zl3mwsseWVge5XBMjf5fHymcBk0dlkV8rS1BSoXdPksSSkMfWc4mA/p.png',
        productName: 'Puratos - Extraglace vanilla',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 23,
        productImage: 'https://uc3bce5d59f8d268854a6f602879.previews.dropboxusercontent.com/p/thumb/ACgfvcBnN_kjs2W8GbIrC_Po9QxhUA0lH_RZ3Jb1tX6b5pC5iLzeUwEWeu5HN0e1989ku3ZyQMRkqLeQOeYqwI7KHwxFQFe5OGy2s_EvQKcyxtD9qe-r7nbw6TMv4hG_tz541XdJhe1R8kZ96SRQVdMxvgQQF-y1Bc25Vpkv-snB7TNK40SZv1fUioxa9JqNPPSmHCjcbR0__VkV6j7AKn-vf5wfST_NDg_Ct5UyWcImBfLaL7R3A5KZkAb3AKZDhyUC98qj6NLR53cX_7zJcAuwDuY2ypcOqyAKZpxVgxdujoUtFXjIkaZPkygdqTtKneglSX8fNezBD3KvQ-vDqWaTuBU73FAm2Jp7hnUc4ide8A/p.png',
        productName: 'Puratos - Satin chocolate cream cake mix',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 24,
        productImage: 'https://uc56faf9f46bc75e9d7a32676ff4.previews.dropboxusercontent.com/p/thumb/ACjwQn6-luuww11dm8NVlzze-Q6RXnt_v12QStEeE9Wli4KNE-9zEufc99a48O--659s_iQIsWlF1ftO2iEzXW7PSBRDM0cTv7129ziwc4oPRxOscTZgxyoW8kVBrXfZdILxmWN85cjc0F3Z6PZwNOd3dBRoVpgHasrOlFj6o6O0dIgqj_i6abP38QtcTq4VScxZ5cik3AgMdUwUPYqn7S2IiE1v6M-p7ePLaiWcdLa8m9k2NZ827_d44Zy6b88n88F2wSJAG1-JlkjodFehZAVtATdbuAz44xHYIXEhTV0Ac2xMP9eDKbcs-vaKc3PLJMQ9Dorn54E_e35PgYs-12km2f6kSr4DbVSTJs3--5k3cw/p.png',
        productName: 'Puratos - Satin red velvet cream cake mix',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 25,
        productImage: 'https://uc3222042efb3de8eaac8b270618.previews.dropboxusercontent.com/p/thumb/ACgaq-Dctw6Takv7B-7o2aIMvfiObWiXxM4FlTPr3_W2Zt3BajrrVhB5u9I9lVj7dzVPRxrokzVO0zHN2EPC-S8JaTuAsLdAAFd6A0QTIEetrSIe9J9VfAWYk_B4Yyu6PgtFNZaLANX4tog1-zKvHCJ6bdrRZKLC3I3tWPES8C-Zk3t1oLvhm5Iy8SSFpHU1uxWt16by7U5hgF3XKuYauSxq1RVm4j-gHPXDXrXU-nM2JZWMOfKiwJfbN7TE40Zrr0hFPxslNIg4SMyF94rPEtOcON0zF1-TgR3wXqsZtNBEloRj8cm0vvYUWeomQziSNRX1Sh3W_PFjhCmlYxYEcaYtgeRnFVgTrQI6K3bNNe1fjQ/p.png',
        productName: 'Puratos - Satin vanilla cream cake mix',
        productAvailability: 1,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 26,
        productImage: 'https://uc9487bd6bafe2d832167997d196.previews.dropboxusercontent.com/p/thumb/AChOfw65QioxpPTwxHUzgC1VI7unxjS7wKk1Bj-T6Gf1PaA0tEVi-gZnpiY6-HaQC2srlEuQbV9R-MecL8sI8tBXddn92YED_vUQWuRpUO4IfYwvDLGxwFTD_A0RvQeh3Jaohz7Iu7B_diIxWDOQ1NBJxjw_LYwOnrmIiJO4H6eV643a3MM5lHRF2R4DxIe0piu2znA2_OiRonrDzYp72lWSDowOOv6Axoqb-enjMxz0x9DomGc1D1ak8HOEtWHyjPs2tyfyFX4wvSBV79J5eGo-FGeZbxyJzF7twIoMflL6gJiA5Uc6TRdIZD6NgSse8Mnm_e2jCzdAQ5EqrmqHX8hnTRBIHwMNiTZEmSwPnTPnyQ/p.png',
        productName: 'Puratos - White sugar paste',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 27,
        productImage: 'https://ucd8cd1990d438c1aab62f9682bc.previews.dropboxusercontent.com/p/thumb/AChP9-yVOR8oNrO8AIvj6fTHTlwNX7wx72t4tkeBXObHNCHy910tZzBGLheUfkWCZ7pXtk6w9YYI0Ok1mzwjc6Dfp6WTwg0-GGWzIDC30Sev2xQBWf_tlGsJjfODYdFtSJw27Rm__GbRvmDs18Orw1jp3WP03ThXDhSWzEtKZGzTTb5KKvocUAFh8pt8i15qY-f_GwbgMzmZd-PlomuBuURkSmQWnUPIaa7D6zN1tma3XOolH5orRRbDcBb3ws611xje0etT7_hvd6MRLPSbdmaWLdOtGUbJ4ECXaGgh1w4FMVYBIhqbGt5xbxiPCrxdHL3umi_-fF5mKJrDSRHpWg4AasSsAfqXuqQ6s0JFTgfBOQ/p.png',
        productName: 'Puratos - Supergato 5kg',
        productAvailability: 0,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 28,
        productImage: 'https://uc1e7fbc47500b3e40412cc29e3e.previews.dropboxusercontent.com/p/thumb/ACj4H-96B_SaaR6tPj9E9knREBBM6qK0B9AmalvNm9643ndTtiKd1JSHJaHAc5QDsLNcAhio5QwIiyK7KyfG4TBsAOPc93mEkoXoNfJ-xxjRU1XT1sh5r4A8liV430iPVdk9ZyBCMDbH3oy-qV0QFdBYDnoJaWwEH69Sf45tMtaCf-7Fx6D4Lkr-DI35lMHWbupnHoydSuLW63me2dMm89efxE0JWRjPV8UMHpJzOYrx9UKh29e9j6wTg4eg1-Dm-6_14tkOVmzjyJaco1L6i6Dh_RfbSzatDDy_xhcL1pok6CIkSxK_EcPRRLEtMeG60FtI5A6cNVuyO4bARJDlqUV2m_iLDZNbwESF63HcAelUfQ/p.png',
        productName: 'Puratos - Supergato 5kg',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 29,
        productImage: 'https://uc7c4bb2dda27cc750c93f0982c9.previews.dropboxusercontent.com/p/thumb/ACiYdYDx-RJjmtEwwV9zULMqqtR-mpwzZuVAvFrXb8MkuaMsAgCfO1tPJBgnCM2iqn59XJx2ebjPbvPBDZ_lWCTQMQFmLxJIhf79affLRoxF6SyFOxRK85rnttgf3LL4kSZ38ZGGS8Yd_EUjod5cHkzT2Wg7bLy_Pj9Hn1S6AdYwLthEFPKX-6MWkU7o1u1tcsCo8eufQSPp8nqdT0b43PqhivDbfkvnmfUnIveA1OmXLhq4u2EadGpGZJvYTTGURk9kcrPVIZuRhs41QXyAgkN_NjWzNaSDZqkXecHSUgfKexlfMnT2gPbbMQEBnmRRLLRIHNfBNQxKFBx6_L60ZBUrolGlD69zNGw_PahDtAUSJg/p.png',
        productName: 'Puratos - Tegral Satin cream cake mix',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 30,
        productImage: 'https://ucc7bff45c3584c58eb9f2ba3bc3.previews.dropboxusercontent.com/p/thumb/ACh_ts1BBdQkzkC0vCdNK_fHhO5c5gloRLmrAeiwv-uKyNmuaBXwMQTfmdlTYPjXrLeYpBlVYoYCqjmJaB1cUUd0Ak0jheBa6VBlUZDo55SRlnGvB1OgJMIoaU-V_Jge9n-u0s5DsoVhvR7SwXU4R4RbK6sAx3hnm4UuqgL4WjmH18DKO0hzdbOYitiOiQ0BqInmFkOEyhjydt5eWT1eT_48GUIGv1U-Xk7yQ0NH3OI5VE8DL2G6lm0gPsZiSUPwJlKvRRhK0ZeuIgtN-HdyCC5IimdymjffLTOBFQEGh3_8cNsWtYC6mJsjhjHU2c0iJKdFu-JNw5l8R0eO3B1DUeyH0-h40kSjZ2etV6In-270cA/p.png',
        productName: 'Puratos - Tegral Satin chocolate cream cake mix',
        productAvailability: 1,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 31,
        productImage: 'https://uccb2475301bfeefa2618d9fe00a.previews.dropboxusercontent.com/p/thumb/ACgJzeyXQ2ELvaIxOTzKsd9xlRX0DqT8MU7qmZK_2STbivW7pcP_RkMNNbLYEAIQcHf0N9P2i9qoJCh6yDcqRJSOQR8HVapbmJinNSpyZfj1gGzVi2aE5gsGouPE9fFO4YIP5VrxoU56uILqXT35iTyJjwV3_akhi4tCgviEx9EXV4IJIkcodySFv_bqYANugRf2R9bOzrFIUmblsZUgYeVIDhio8hBhFDMSzmggAlxQTxnC9a7IydILRW4iHsL3TXOCCTZVzTcixK1VXYPWNtT03cJTYDzSWeNiWxbst-yhiZvRj8-FPToCRovAHNnBAxrOmsMDlYJ7r2bInHM8JaD9_2PrLUAELbCeiXm7Xs6d5A/p.png',
        productName: 'Taz krem santi | whipped cream',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    }
];

export default product;



//   const [products, setProducts] = useState([]);

//   // Fetch products from backend
//   useEffect(() => {
//     fetch('http://localhost:5000/products') // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);